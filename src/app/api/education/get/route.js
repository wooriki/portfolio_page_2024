import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const extractData = await Education.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
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
