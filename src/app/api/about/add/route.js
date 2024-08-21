import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";
import { runMiddleware } from "../../../../../lib/cors-middleware";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  await runMiddleware(req, res, cors);

  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await About.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "데이터가 성공적으로 저장되었습니다.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "오류가 발견되었습니다. 다시 시도해 주세요.",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "오류가 발견되었습니다. 다시 시도해 주세요.",
    });
  }
}
