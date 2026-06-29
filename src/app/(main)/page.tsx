"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const approachWideImageRef = useRef<HTMLImageElement | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isApproachWideImageVisible, setIsApproachWideImageVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const node = aboutSectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsApproachVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = approachWideImageRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsApproachWideImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = projectsSectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = contactSectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.95 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const headingLines = ["공간을 하나의", "경험으로 설계합니다"];
  const descriptionLines = ["은 팝업부터 전시, 인테리어를 아우르며,", "브랜드의 목적과 사용자 경험을 기준으로 공간을 구성합니다."];
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
    { label: "주요 프로젝트", className: "text-base font-semibold leading-10 tracking-[-0.90px] whitespace-nowrap text-accent" },
    { label: "INTERIOR", className: "text-base font-light leading-10 tracking-[-0.90px] whitespace-nowrap text-accent" },
    { label: "EXHIBITION", className: "text-base font-light leading-10 tracking-[-0.90px] whitespace-nowrap text-accent" },
  ];

  return (
    <main>
      <section className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0 hero-image-zoom-out">
          <Image src="/images/landing/hero-bg.png" alt="HUIN landing hero background" fill priority className="object-cover object-center" />
        </div>

        <div className="absolute inset-0 hero-image-zoom-out">
          <Image src="/images/landing/hero-bg.png" alt="HUIN landing hero background" fill priority className="object-contain object-center" />
        </div>

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative h-full px-12 pb-6 pt-32 text-white">
          <div className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2">
            <h1 className="hero-text-fade-up text-7xl leading-none font-normal" style={{ letterSpacing: "-0.045em" }}>
              HUIN
            </h1>
            <p className="hero-text-fade-up-delayed mt-4 text-lg leading-none font-normal">설계가 바뀌면, 공간의 경험이 바뀝니다</p>
          </div>

          <div className="absolute inset-x-12 bottom-12 flex items-end justify-between text-2xs leading-none font-semibold">
            <a href="#about-section-heading" className="menu-underline">
              OUR APPROACH
            </a>
            <a href="#projects-heading" className="menu-underline">
              SELECTED PROJECTS
            </a>
          </div>
        </div>
      </section>

      <section className="px-12 py-[210px]">
        <div ref={aboutSectionRef} className="relative w-full" style={{ aspectRatio: "1343 / 795" }} aria-labelledby="about-section-heading">
          <Image
            className={`approach-fade-right absolute right-0 top-0 h-[73.1%] w-[34.8%] ${isApproachVisible ? "is-visible" : ""}`}
            style={{ animationDelay: "0s" }}
            alt="목재 인테리어 공간 전경"
            src="/images/landing/ourapproach-2.png"
            width={468}
            height={581}
          />

          <div className="absolute left-0 top-0 h-full w-[60.8%]">
            <div className="flex w-[138px]">
              <p className={`approach-fade-up -ml-1 mt-0 h-10 w-[142px] whitespace-nowrap text-center text-2xl font-semibold leading-10 tracking-[-0.90px] text-accent ${isApproachVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.6s" }}>
                Our Approach
              </p>
            </div>

            <h2 id="about-section-heading" className={`approach-fade-up -ml-1 mt-4 h-[106px] w-[340px] text-[40px] font-semibold leading-[53px] text-ink ${isApproachVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.75s" }}>
              {headingLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <div className={`approach-fade-up mt-[35px] h-px w-20 bg-accent ${isApproachVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.9s" }} aria-hidden="true" />

            <p className={`approach-fade-up mt-[34px] h-[58px] w-[392px] text-base font-normal leading-[29px] text-ink ${isApproachVisible ? "is-visible" : ""}`} style={{ animationDelay: "1.05s" }}>
              <strong className="font-normal">HUIN</strong>
              {descriptionLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < descriptionLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <Image
              ref={approachWideImageRef}
              className={`approach-fade-left absolute bottom-0 left-0 h-auto w-[100.5%] ${isApproachWideImageVisible ? "is-visible" : ""}`}
              alt="휴식 공간이 있는 미니멀 인테리어"
              src="/images/landing/ourapproach-1.png"
              width={820}
              height={412}
            />
          </div>

          <button type="button" className="group absolute -right-px bottom-0 flex h-[50px] cursor-pointer items-center gap-[16px] overflow-hidden rounded-[30px] pl-[18px] pr-0" aria-label="View Projects">
            <span className="absolute inset-0 origin-right scale-x-0 rounded-[30px] bg-accent transition-transform duration-[250ms] ease-out group-hover:scale-x-100" />
            <span className="relative z-10 shrink-0 whitespace-nowrap text-xl font-normal leading-[22px] text-accent transition-colors duration-[250ms] ease-out group-hover:text-white">View Projects</span>
            <Image className="relative z-10 h-[50px] w-[50px] shrink-0" alt="" aria-hidden="true" src="/images/icon/icon-navigation-btn-beige.png" width={50} height={50} />
          </button>
        </div>
      </section>

      <section ref={projectsSectionRef} className="flex flex-col gap-[120px] bg-[#b7a68b1a] px-12 py-32">
        <header className="relative h-20 w-full">
          <div className="absolute left-0 top-0 flex h-10 w-full justify-between">
            <div className="flex h-[29px] w-[79px]">
              <h2 id="projects-heading" className={`projects-fade-up ml-px h-10 w-[88px] whitespace-nowrap text-2xl font-semibold leading-10 tracking-[-0.90px] text-accent ${isProjectsVisible ? "is-visible" : ""}`} style={{ animationDelay: "0s" }}>
                Projects
              </h2>
            </div>

            <nav className="inline-flex h-10 items-center gap-8" aria-label="Project categories">
              {categoryTabs.map((tab) => (
                <div key={tab.label} className={`projects-fade-up ${isProjectsVisible ? "is-visible" : ""}`} style={{ animationDelay: "0s" }}>
                  <button type="button" className={tab.className}>
                    {tab.label}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          <p className={`projects-fade-up absolute left-0 top-10 w-[480px] text-2xl font-normal leading-10 tracking-[-0.90px] text-ink ${isProjectsVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.3s" }}>
            인테리어와 전시 중심으로 다양한 공간 경험을 설계
          </p>
        </header>

        <article className="group ml-[28.497%] flex w-[71.503%] flex-col gap-2">
          <div className="relative overflow-hidden">
            <Image className="project-card-image aspect-[960/538] h-auto w-full object-cover" alt={featuredProject.imageAlt} src={featuredProject.imageSrc} width={960} height={538} />
            <div className="project-card-overlay absolute right-4 top-4">
              <button type="button" className="group flex h-[50px] w-[146.5px] cursor-pointer items-center overflow-hidden rounded-[30px] px-[18px]" aria-label="view more">
                <span className="absolute inset-0 origin-right scale-x-0 rounded-[30px] bg-accent transition-transform duration-[250ms] ease-out group-hover:scale-x-100" />
                <span className="relative z-10 whitespace-nowrap text-sm font-normal leading-none text-accent transition-colors duration-[250ms] ease-out group-hover:text-white">view more</span>
                <Image src="/images/icon/icon-navigation-btn-beige.png" alt="" aria-hidden="true" width={50} height={50} className="relative z-10 ml-4 h-[50px] w-[50px] shrink-0" />
              </button>
            </div>
          </div>

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
              <article key={project.title} className={`${project.wrapperClassName} group`}>
                <div className="relative overflow-hidden">
                  <Image
                    className={`project-card-image ${project.title === "오디너리 하우스" || project.title === "플로우랩 서울" ? "aspect-[314/478] h-auto w-full object-cover" : "aspect-[314/312] h-auto w-full object-cover"}`}
                    alt={project.imageAlt}
                    src={project.imageSrc}
                    width={314}
                    height={478}
                  />
                  <div className="project-card-overlay absolute right-4 top-4">
                    <button type="button" className="group flex h-[50px] w-[146.5px] cursor-pointer items-center overflow-hidden rounded-[30px] px-[18px]" aria-label="view more">
                      <span className="absolute inset-0 origin-right scale-x-0 rounded-[30px] bg-accent transition-transform duration-[250ms] ease-out group-hover:scale-x-100" />
                      <span className="relative z-10 whitespace-nowrap text-sm font-normal leading-none text-accent transition-colors duration-[250ms] ease-out group-hover:text-white">view more</span>
                      <Image src="/images/icon/icon-navigation-btn-beige.png" alt="" aria-hidden="true" width={50} height={50} className="relative z-10 ml-4 h-[50px] w-[50px] shrink-0" />
                    </button>
                  </div>
                </div>

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

      <section className="bg-bg px-12 py-[210px]">
        <div ref={contactSectionRef} className="relative h-[525px] w-full" aria-labelledby="cta-heading">
          <div className="absolute left-0 top-[24.381%] flex h-[64.952%] w-[453px] flex-col">
            <p className={`contact-fade-up h-10 w-[88px] whitespace-nowrap text-2xl font-semibold tracking-[-0.90px] text-accent ${isContactVisible ? "is-visible" : ""}`} style={{ animationDelay: "0s" }}>
              Contact
            </p>
            <h2 id="cta-heading" className={`contact-fade-up mt-4 h-24 w-[274px] text-[40px] font-normal leading-[48px] text-ink ${isContactVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.15s" }}>
              공간의 목적부터
              <br />
              함께 설계합니다.
            </h2>
            <div className={`contact-fade-up mt-[35px] h-px w-20 bg-accent ${isContactVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.3s" }} aria-hidden="true" />
            <p className={`contact-fade-up mt-[35px] h-12 w-[172px] text-base font-normal leading-6 text-ink ${isContactVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.45s" }}>
              프로젝트를 시작 전
              <br />
              먼저 이야기를 나눠보세요.
            </p>
          </div>

          <button type="button" className="group absolute top-[420px] flex h-[50px] w-[198px] cursor-pointer items-center overflow-hidden rounded-[30px] px-[18px]" style={{ left: "calc(39.44% - 225px)" }} aria-label="상담 신청하기">
            <span className="absolute inset-0 origin-right scale-x-0 rounded-[30px] bg-accent transition-transform duration-[250ms] ease-out group-hover:scale-x-100" />
            <span className="relative z-10 whitespace-nowrap text-xl font-semibold leading-[28px] text-accent transition-colors duration-[250ms] ease-out group-hover:text-white">상담 신청하기</span>
            <Image src="/images/icon/icon-navigation-btn-beige.png" alt="" aria-hidden="true" width={50} height={50} className="relative z-10 ml-4 h-[50px] w-[50px] shrink-0" />
          </button>

          <div className={`contact-reveal-right absolute left-[39.44%] top-0 h-full w-[60.489%] overflow-hidden ${isContactVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.6s" }}>
            <Image className="h-full w-full object-cover object-center" alt="미니멀한 공간에 배치된 우드 가구" src="/images/landing/contact-bg.png" width={842} height={525} />
          </div>
        </div>
      </section>
    </main>
  );
}
