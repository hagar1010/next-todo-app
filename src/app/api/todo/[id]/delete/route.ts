import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.todo.delete({ where: { id } });

  return NextResponse.redirect(new URL("/", request.url));
}
