import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";
import { runMiddleware } from "../../../../../.next/lib/cors-middleware";

export const dynamic = "force-dynamic";

// 데이터를 가져오는 GET 요청 처리
export async function GET(req) {
  await runMiddleware(req, null, cors);

  try {
    await connectToDB(); // MongoDB에 연결
    const extractData = await Home.find({}); // 데이터를 MongoDB에서 가져옴

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
        message: "데이터를 성공적으로 가져왔습니다.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "데이터가 존재하지 않습니다.",
      });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      success: false,
      message: "서버에서 오류가 발생했습니다.",
    });
  }
}
