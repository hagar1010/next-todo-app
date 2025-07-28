import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.todo.update({
    where: { id },
    data: { completed: !todo.completed },
  });

  return NextResponse.redirect(new URL("/", request.url));
}
