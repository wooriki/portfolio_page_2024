import connectToDB from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const checkUser = await User.findOne({ username });

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "해당 사용자가 존재 하지않습니다. 다시 시도해 주세요.",
      });
    }

    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "비밀번호가 틀립니다. 다시 시도해 주세요.",
      });
    }
    return NextResponse.json({
      success: true,
      message: "로그인 성공!",
    });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "오류가 발견되었습니다. 다시 시도해 주세요.",
    });
  }
}
