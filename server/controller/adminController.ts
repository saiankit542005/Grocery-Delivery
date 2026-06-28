import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";

// ========================
// ADMIN STATS
// ========================
export const getAdminStats = async (req: Request, res: Response) => {
  const [
    totalOrders,
    totalUsers,
    totalProducts,
    outofStocks,
    totalPartners,
    recentOrders,
  ] = await Promise.all([
    prisma.order.count({
      where: { NOT: [{ paymentMethod: "card", isPaid: false }] },
    }),
    prisma.user.count(),
    prisma.product.count(),
    prisma.product.count({ where: { stock: 0 } }),
    prisma.deliveryPartner.count(),
    prisma.order.findMany({
      where: { NOT: [{ paymentMethod: "card", isPaid: false }] },
      orderBy: { createdAt: "desc" },
      take: 8,
      include: {
        user: { select: { name: true, email: true } },
        deliveryPartner: { select: { name: true, phone: true } },
      },
    }),
  ]);

  res.json({
    totalOrders,
    totalUsers,
    totalProducts,
    outofStocks,
    totalPartners,
    recentOrders,
  });
};

// ========================
// GET DELIVERY PARTNERS
// ========================
export const getDeliveryPartners = async (req: Request, res: Response) => {
  const partners = await prisma.deliveryPartner.findMany({
    orderBy: { createdAt: "desc" },
  });

  res.json({ partners });
};

// ========================
// CREATE DELIVERY PARTNER
// ========================
export const createDeliveryPartner = async (req: Request, res: Response) => {
  const { email, name, password, phone, vehicleType } = req.body;

  if (!name || !email || !password || !phone) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const partner = await prisma.deliveryPartner.create({
    data: {
      email,
      name,
      password: hashedPassword,
      phone,
      vehicleType,
    },
  });

  res.status(201).json({ partner });
};

// ========================
// UPDATE DELIVERY PARTNER
// ========================
export const updateDeliveryPartner = async (
  req: Request,
  res: Response,
) => {
  const { name, phone, vehicleType, isActive } = req.body;

  const data: any = {};

  if (name) data.name = name;
  if (phone) data.phone = phone;
  if (vehicleType) data.vehicleType = vehicleType;
  if (typeof isActive === "boolean") data.isActive = isActive;

  try {
    const partner = await prisma.deliveryPartner.update({
      where: { id: req.params.id as string },
      data,
    });

    res.json({ partner });
  } catch (error) {
    res.status(404).json({ message: "Partner not found" });
  }
};

// ========================
// ASSIGN DELIVERY PARTNER
// ========================
export const assignDeliveryPartner = async (
  req: Request,
  res: Response,
) => {
  const { partnerId } = req.body;

  const order = await prisma.order.findUnique({
    where: { id: req.params.id as string },
  });

  const partner = await prisma.deliveryPartner.findUnique({
    where: { id: partnerId },
  });

  if (!order || !partner) {
    return res
      .status(404)
      .json({ message: "Order or Partner not found" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const history: any[] = Array.isArray(order.statusHistory)
    ? order.statusHistory
    : [];

  let status = order.status;

  if (order.status === "Placed" || order.status === "Confirmed") {
    status = "Assigned";
    history.push({
      status: "Assigned",
      note: `Assigned to ${partner.name}`,
      timestamp: new Date(),
    });
  }

  const updatedOrder = await prisma.order.update({
    where: { id: order.id },
    data: {
      deliveryPartnerId: partner.id,
      deliveryOtp: otp,
      status,
      statusHistory: history,
    },
  });

  res.json({ order: updatedOrder });
};