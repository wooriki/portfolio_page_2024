import ClientAboutView from "@/components/client-view/about/index";
import ClientContactView from "@/components/client-view/contact/index";
import ClientExperienceAndEducationView from "@/components/client-view/exprience/index";
import ClientHomeView from "@/components/client-view/home/index";
import ClientProjectView from "@/components/client-view/project/index";

async function extractAllDatas(currentSection) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${currentSection}/get`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
