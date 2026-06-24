import Image from "next/image";

export default function Main() {
  const headingLines = ["공간을 하나의", "경험으로 설계합니다"];
  const descriptionLines = [
    "은 팝업부터 전시, 인테리어를 아우르며,",
    "브랜드의 목적과 사용자 경험을 기준으로 공간을 구성합니다.",
  ];
  const featuredProject = {
    year: "2026",
    category: "Interior",
    title: "대흥동 A 아파트",
    imageSrc: "/images/landing/projects-daheungdong.png",
    imageAlt: "대흥동 A 아파트 인테리어 프로젝트 이미지",
  };
  const projectCards = [
    {
      year: "2026",
      category: "Interior",
      title: "브루클린 커피 서울",
      imageSrc: "/images/landing/projects-brookelyn.png",
      imageAlt: "브루클린 커피 서울 인테리어 프로젝트 이미지",
      wrapperClassName: "flex flex-col gap-2",
      imageClassName: "",
      titleWidth: "w-[109px]",
    },
    {
      year: "2026",
      category: "Interior",
      title: "오디너리 하우스",
      imageSrc: "/images/landing/projects-ordinaryhouse.png",
      imageAlt: "오디너리 하우스 인테리어 프로젝트 이미지",
      wrapperClassName: "flex flex-col gap-2",
      imageClassName: "",
      titleWidth: "w-[93px]",
    },
    {
      year: "2026",
      category: "Interior",
      title: "스튜디오 모어",
      imageSrc: "/images/landing/projects-studiomore.png",
      imageAlt: "스튜디오 모어 인테리어 프로젝트 이미지",
      wrapperClassName: "flex flex-col gap-2",
      imageClassName: "",
      titleWidth: "w-[81px]",
    },
    {
      year: "2026",
      category: "Interior",
      title: "플로우랩 서울",
      imageSrc: "/images/landing/projects-flowlab.png",
      imageAlt: "플로우랩 서울 인테리어 프로젝트 이미지",
      wrapperClassName: "flex flex-col gap-2",
      imageClassName: "",
      titleWidth: "w-[81px]",
    },
  ];
  const categoryTabs = [
    { label: "주요 프로젝트", className: "absolute top-0 -left-3 text-base font-semibold leading-10 tracking-[-0.90px] whitespace-nowrap text-accent", wrapper: "w-[99px] relative h-10" },
    { label: "INTERIOR", className: "absolute top-0 left-0.5 text-base font-light leading-10 tracking-[-0.90px] whitespace-nowrap text-accent", wrapper: "w-[67px] relative h-10" },
    { label: "EXHIBITION", className: "absolute top-0 left-[3px] text-base font-light leading-10 tracking-[-0.90px] whitespace-nowrap text-accent", wrapper: "w-[81px] relative h-10" },
  ];

  return (
    <main>
      <section className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/landing/hero-bg.png" alt="HUIN landing hero background" fill priority className="object-cover object-center" />
        </div>

        <div className="absolute inset-0">
          <Image src="/images/landing/hero-bg.png" alt="HUIN landing hero background" fill priority className="object-contain object-center" />
        </div>

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative h-full px-12 pb-6 pt-32 text-white">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-7xl leading-none font-normal" style={{ letterSpacing: "-0.045em" }}>
              HUIN
            </h1>
            <p className="mt-4 text-lg leading-none font-normal">설계가 바뀌면, 공간의 경험이 바뀝니다</p>
          </div>

          <div className="absolute inset-x-12 bottom-12 flex items-end justify-between text-2xs leading-none font-semibold">
            <p>OUR APPROACH</p>
            <p>SELECTED PROJECTS</p>
          </div>
        </div>
      </section>

      <section className="px-12 py-[210px]">
        <div className="relative w-full" style={{ aspectRatio: "1343 / 795" }} aria-labelledby="about-section-heading">
          <Image
            className="absolute right-0 top-0 h-[73.1%] w-[34.8%]"
            alt="목재 인테리어 공간 전경"
            src="/images/landing/ourapproach-2.png"
            width={468}
            height={581}
          />

          <div className="absolute left-0 top-0 h-full w-[60.8%]">
            <div className="flex w-[138px]">
              <p className="-ml-1 mt-0 h-10 w-[142px] whitespace-nowrap text-center text-2xl font-semibold leading-10 tracking-[-0.90px] text-accent">
                Our Approach
              </p>
            </div>

            <h2 id="about-section-heading" className="-ml-1 mt-4 h-[106px] w-[340px] text-[40px] font-semibold leading-[53px] text-ink">
              {headingLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <div className="mt-[35px] h-px w-20 bg-accent" aria-hidden="true" />

            <p className="mt-[34px] h-[58px] w-[392px] text-base font-normal leading-[29px] text-ink">
              <strong className="font-normal">HUIN</strong>
              {descriptionLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < descriptionLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <Image
              className="absolute bottom-0 left-0 h-auto w-[100.5%]"
              alt="휴식 공간이 있는 미니멀 인테리어"
              src="/images/landing/ourapproach-1.png"
              width={820}
              height={412}
            />
          </div>

          <button
            type="button"
            className="absolute -right-px bottom-0 flex h-[50px] w-[182px] cursor-pointer items-center gap-4"
            aria-label="View Projects"
          >
            <span className="-ml-px mt-3.5 h-[22px] w-[117px] whitespace-nowrap text-center text-xl font-normal leading-[22px] text-accent">
              View Projects
            </span>
            <Image
              className="h-[50px] w-[50px]"
              alt=""
              aria-hidden="true"
              src="/images/icon/icon-navigation-btn-beige.png"
              width={50}
              height={50}
            />
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-[120px] bg-[#b7a68b1a] px-12 py-32">
        <header className="relative h-20 w-full">
          <div className="absolute left-0 top-0 flex h-10 w-full justify-between">
            <div className="flex h-[29px] w-[79px]">
              <h2 className="ml-px h-10 w-[88px] whitespace-nowrap text-2xl font-semibold leading-10 tracking-[-0.90px] text-accent">Projects</h2>
            </div>

            <nav className="relative -mr-px inline-flex h-10 w-[303px] items-center gap-7" aria-label="Project categories">
              {categoryTabs.map((tab) => (
                <div key={tab.label} className={tab.wrapper}>
                  <button type="button" className={tab.className}>
                    {tab.label}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          <p className="absolute left-0 top-10 w-[480px] text-2xl font-normal leading-10 tracking-[-0.90px] text-ink">
            인테리어와 전시 중심으로&nbsp;&nbsp;다양한 공간 경험을 설계
          </p>
        </header>

        <article className="ml-[28.497%] flex w-[71.503%] flex-col gap-2">
          <Image className="aspect-[960/538] h-auto w-full object-cover" alt={featuredProject.imageAlt} src={featuredProject.imageSrc} width={960} height={538} />

          <div className="flex h-[38px] flex-col gap-1">
            <div className="flex w-full justify-between">
              <div className="flex w-[38px]">
                <div className="h-3.5 w-[38px] whitespace-nowrap text-base leading-[14px] text-ink">{featuredProject.year}</div>
              </div>
              <div className="flex w-[49px]">
                <div className="h-3.5 w-[49px] whitespace-nowrap text-base leading-[14px] text-ink">{featuredProject.category}</div>
              </div>
            </div>
            <div className="flex w-[92px]">
              <div className="h-5 w-[92px] text-sm font-semibold leading-5 text-ink">{featuredProject.title}</div>
            </div>
          </div>
        </article>

        <div className="w-full">
          <div className="grid w-full grid-cols-4 gap-[2.455%]">
            {projectCards.map((project) => (
              <article key={project.title} className={project.wrapperClassName}>
                <Image
                  className={project.title === "오디너리 하우스" || project.title === "플로우랩 서울" ? "aspect-[314/478] h-auto w-full object-cover" : "aspect-[314/312] h-auto w-full object-cover"}
                  alt={project.imageAlt}
                  src={project.imageSrc}
                  width={314}
                  height={478}
                />

                <div className="ml-px flex h-[38px] w-full flex-col gap-1">
                  <div className="flex w-full justify-between">
                    <div className="flex w-[38px]">
                      <div className="h-3.5 w-[38px] whitespace-nowrap text-base leading-[14px] text-ink">{project.year}</div>
                    </div>
                    <div className="flex w-[49px]">
                      <div className="h-3.5 w-[49px] whitespace-nowrap text-base leading-[14px] text-ink">{project.category}</div>
                    </div>
                  </div>
                  <div className={project.titleWidth}>
                    <div className={`${project.titleWidth} h-5 text-sm font-semibold leading-5 text-ink`}>{project.title}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-12 py-[210px]">
        <div className="relative h-[525px] w-full" aria-labelledby="cta-heading">
          <div className="absolute left-[3.448%] top-[24.381%] flex h-[64.952%] w-[32.543%] flex-col">
            <p className="h-10 w-[88px] whitespace-nowrap text-2xl font-semibold tracking-[-0.90px] text-accent">Contact</p>
            <h2 id="cta-heading" className="mt-4 h-24 w-[274px] text-[40px] font-normal leading-[48px] text-ink">
              공간의 목적부터
              <br />
              함께 설계합니다.
            </h2>
            <div className="mt-[35px] h-px w-20 bg-accent" aria-hidden="true" />
            <p className="mt-[35px] h-12 w-[172px] text-base font-normal leading-6 text-ink">
              프로젝트를 시작 전
              <br />
              먼저 이야기를 나눠보세요.
            </p>
            <button type="button" className="absolute left-[276px] top-[293px] flex w-[177px] items-center gap-2" aria-label="상담 신청하기">
              <span className="mt-[11px] flex w-[119px]">
                <span className="ml-0.5 h-7 w-[115px] whitespace-nowrap text-center text-xl font-semibold leading-[28px] text-accent">상담 신청하기</span>
              </span>
              <Image src="/images/icon/icon-navigation-btn-beige.png" alt="" aria-hidden="true" width={50} height={50} className="h-[50px] w-[50px]" />
            </button>
          </div>

          <div className="absolute left-[39.44%] top-0 h-full w-[60.489%] overflow-hidden">
            <Image
              className="h-full w-full object-cover object-center"
              alt="미니멀한 공간에 배치된 우드 가구"
              src="/images/landing/contact-bg.png"
              width={842}
              height={525}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
