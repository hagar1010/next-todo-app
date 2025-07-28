import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();

  const todo = await prisma.todo.create({
    data: { title, description },
  });

  return NextResponse.json(todo);
}
