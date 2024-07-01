"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Nav from "@/components/nav";
import User from "../../public/user.png";

const defaultCoverImage =
  "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_profile_header.jpg";

const Plus = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="whiteLowEmphasis"
    height="24"
    width="24"
    className="sc-klVQfs fLZPES"
  >
    <g filter="url(#filter0_i_6_79__Cffb1zrt)">
      <path
        d="M12.865 3.666a.936.936 0 01.662-.274h12.925c.248 0 .486.099.661.274l9.14 9.139a.936.936 0 01.273.662V26.39a.936.936 0 01-.274.662l-9.139 9.139a.936.936 0 01-.661.274H13.527a.936.936 0 01-.662-.274l-9.138-9.139a.936.936 0 01-.275-.662V13.467c0-.248.099-.487.275-.662l9.138-9.139z"
        fill="url(#paint0_linear_6_79__Cffb1zrt)"
      ></path>
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.258 3.724l-9.534 9.534v13.484l9.534 9.534h13.484l9.534-9.534V13.258l-9.534-9.534H13.258zM12.488 0c-.495 0-.968.196-1.318.545L.545 11.17c-.349.35-.545.823-.545 1.317v15.026c0 .494.196.967.545 1.317L11.17 39.455c.35.349.823.545 1.317.545h15.026c.494 0 .967-.196 1.317-.545L39.455 28.83c.349-.35.545-.823.545-1.317V12.487c0-.494-.196-.967-.545-1.317L28.83.545A1.862 1.862 0 0027.513 0H12.487z"
      fill="url(#paint1_linear_6_79__Cffb1zrt)"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.258 3.724l-9.534 9.534v13.484l9.534 9.534h13.484l9.534-9.534V13.258l-9.534-9.534H13.258zM12.488 0c-.495 0-.968.196-1.318.545L.545 11.17c-.349.35-.545.823-.545 1.317v15.026c0 .494.196.967.545 1.317L11.17 39.455c.35.349.823.545 1.317.545h15.026c.494 0 .967-.196 1.317-.545L39.455 28.83c.349-.35.545-.823.545-1.317V12.487c0-.494-.196-.967-.545-1.317L28.83.545A1.862 1.862 0 0027.513 0H12.487z"
      fill="url(#paint2_linear_6_79__Cffb1zrt)"
      fill-opacity=".3"
    ></path>
    <g filter="url(#filter1_d_6_79__Cffb1zrt)">
      <path
        d="M20 14.11l5.869 5.478L28 17.578l-8-7.467-8 7.468 2.131 2.009 5.87-5.479z"
        fill="url(#paint3_linear_6_79__Cffb1zrt)"
      ></path>
      <path
        d="M20 14.11l5.869 5.478L28 17.578l-8-7.467-8 7.468 2.131 2.009 5.87-5.479z"
        fill="url(#paint4_linear_6_79__Cffb1zrt)"
        fill-opacity=".2"
      ></path>
      <path
        d="M20 14.11l5.869 5.478L28 17.578l-8-7.467-8 7.468 2.131 2.009 5.87-5.479z"
        fill="url(#paint5_linear_6_79__Cffb1zrt)"
        fill-opacity=".3"
      ></path>
      <path
        d="M20.16 13.938L20 13.79l-.16.15-5.708 5.328-1.79-1.688L20 10.431l7.658 7.148-1.79 1.688-5.708-5.329z"
        stroke="url(#paint6_linear_6_79__Cffb1zrt)"
        stroke-opacity=".2"
        stroke-width=".468"
      ></path>
      <path
        d="M20 22.633l5.869 5.478L28 26.102l-8-7.467-8 7.467 2.131 2.01 5.87-5.48z"
        fill="url(#paint7_linear_6_79__Cffb1zrt)"
      ></path>
      <path
        d="M20 22.633l5.869 5.478L28 26.102l-8-7.467-8 7.467 2.131 2.01 5.87-5.48z"
        fill="url(#paint8_linear_6_79__Cffb1zrt)"
        fill-opacity=".2"
      ></path>
      <path
        d="M20 22.633l5.869 5.478L28 26.102l-8-7.467-8 7.467 2.131 2.01 5.87-5.48z"
        fill="url(#paint9_linear_6_79__Cffb1zrt)"
        fill-opacity=".3"
      ></path>
      <path
        d="M20.16 22.462l-.16-.15-.16.15-5.708 5.328-1.79-1.687L20 18.955l7.658 7.148-1.79 1.687-5.708-5.328z"
        stroke="url(#paint10_linear_6_79__Cffb1zrt)"
        stroke-opacity=".2"
        stroke-width=".468"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_6_79__Cffb1zrt"
        x1="6.349"
        y1="6.288"
        x2="20.888"
        y2="41.389"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#732600"></stop>
        <stop offset="1" stop-color="#260D00"></stop>
        <stop offset="1" stop-color="#401500"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_6_79__Cffb1zrt"
        x1="3.549"
        y1="3.549"
        x2="36.451"
        y2="36.451"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6E35"></stop>
        <stop offset="1" stop-color="#FF5500"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_6_79__Cffb1zrt"
        x1="-11.951"
        y1="6.608"
        x2="20.081"
        y2="19.876"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF0000"></stop>
        <stop offset="1" stop-color="#FF0000" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_6_79__Cffb1zrt"
        x1="11.99"
        y1="14.849"
        x2="28"
        y2="14.849"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6E35"></stop>
        <stop offset="1" stop-color="#FF5500"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_6_79__Cffb1zrt"
        x1="11.99"
        y1="14.849"
        x2="16.689"
        y2="14.849"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint5_linear_6_79__Cffb1zrt"
        x1="8.963"
        y1="17.522"
        x2="17.631"
        y2="11.457"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF0000"></stop>
        <stop offset="1" stop-color="#FF0000" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint6_linear_6_79__Cffb1zrt"
        x1="13.208"
        y1="11.987"
        x2="21.985"
        y2="22.727"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint7_linear_6_79__Cffb1zrt"
        x1="11.99"
        y1="23.373"
        x2="28"
        y2="23.373"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6E35"></stop>
        <stop offset="1" stop-color="#FF5500"></stop>
      </linearGradient>
      <linearGradient
        id="paint8_linear_6_79__Cffb1zrt"
        x1="11.99"
        y1="23.373"
        x2="16.689"
        y2="23.373"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint9_linear_6_79__Cffb1zrt"
        x1="8.963"
        y1="26.046"
        x2="17.631"
        y2="19.98"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF0000"></stop>
        <stop offset="1" stop-color="#FF0000" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint10_linear_6_79__Cffb1zrt"
        x1="13.208"
        y1="20.51"
        x2="21.985"
        y2="31.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <filter
        id="filter0_i_6_79__Cffb1zrt"
        x="3.452"
        y="3.392"
        width="33.074"
        height="34.478"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        ></feColorMatrix>
        <feOffset dy="1.404"></feOffset>
        <feGaussianBlur stdDeviation=".936"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow_6_79"></feBlend>
      </filter>
      <filter
        id="filter1_d_6_79__Cffb1zrt"
        x="9.66"
        y="8.239"
        width="20.681"
        height="22.681"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        ></feColorMatrix>
        <feOffset dy=".468"></feOffset>
        <feGaussianBlur stdDeviation="1.17"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6_79"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_79"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

const Premium = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    color="primary"
    height="24"
    width="24"
    className="sc-klVQfs hUzTIf"
  >
    <g filter="url(#a__hrzMuihG)">
      <path
        fill="url(#b__hrzMuihG)"
        d="M13 4a1 1 0 011-1h12l1 1 9 9a1 1 0 011 0v13a1 1 0 01-1 1l-9 9a1 1 0 01-1 0H14a1 1 0 01-1 0l-9-9a1 1 0 01-1-1V13h1l9-9z"
      ></path>
    </g>
    <path
      fill="url(#c__hrzMuihG)"
      fill-rule="evenodd"
      d="M13 4l-9 9v14l9 9h14l9-9V13l-9-9H13zm-1-4l-1 1L1 11l-1 1v16l1 1 10 10 1 1h16l1-1 10-10 1-1V12l-1-1L29 1a2 2 0 00-1-1H12z"
      clip-rule="evenodd"
    ></path>
    <path
      fill="url(#d__hrzMuihG)"
      fill-opacity=".3"
      fill-rule="evenodd"
      d="M13 4l-9 9v14l9 9h14l9-9V13l-9-9H13zm-1-4l-1 1L1 11l-1 1v16l1 1 10 10 1 1h16l1-1 10-10 1-1V12l-1-1L29 1a2 2 0 00-1-1H12z"
      clip-rule="evenodd"
    ></path>
    <g filter="url(#e__hrzMuihG)">
      <path fill="url(#f__hrzMuihG)" d="M20 14l6 6 2-2-8-8-8 8 2 2 6-6z"></path>
      <path
        fill="url(#g__hrzMuihG)"
        fill-opacity=".2"
        d="M20 14l6 6 2-2-8-8-8 8 2 2 6-6z"
      ></path>
      <path
        fill="url(#h__hrzMuihG)"
        fill-opacity=".3"
        d="M20 14l6 6 2-2-8-8-8 8 2 2 6-6z"
      ></path>
      <path
        stroke="url(#i__hrzMuihG)"
        stroke-opacity=".2"
        stroke-width=".5"
        d="M20 14l-6 5-2-1 8-8 8 8-2 1-6-5z"
      ></path>
      <path fill="url(#j__hrzMuihG)" d="M20 23l6 5 2-2-8-7-8 7 2 2 6-5z"></path>
      <path
        fill="url(#k__hrzMuihG)"
        fill-opacity=".2"
        d="M20 23l6 5 2-2-8-7-8 7 2 2 6-5z"
      ></path>
      <path
        fill="url(#l__hrzMuihG)"
        fill-opacity=".3"
        d="M20 23l6 5 2-2-8-7-8 7 2 2 6-5z"
      ></path>
      <path
        stroke="url(#m__hrzMuihG)"
        stroke-opacity=".2"
        stroke-width=".5"
        d="M20 22l-6 6-2-2 8-7 8 7-2 2-6-6z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="b__hrzMuihG"
        x1="6.3"
        x2="20.9"
        y1="6.3"
        y2="41.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#732600"></stop>
        <stop offset="1" stop-color="#260D00"></stop>
        <stop offset="1" stop-color="#401500"></stop>
      </linearGradient>
      <linearGradient
        id="c__hrzMuihG"
        x1="3.5"
        x2="36.5"
        y1="3.5"
        y2="36.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6E35"></stop>
        <stop offset="1" stop-color="#F50"></stop>
      </linearGradient>
      <linearGradient
        id="d__hrzMuihG"
        x1="-12"
        x2="20.1"
        y1="6.6"
        y2="19.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="red"></stop>
        <stop offset="1" stop-color="red" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="f__hrzMuihG"
        x1="12"
        x2="28"
        y1="14.8"
        y2="14.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6E35"></stop>
        <stop offset="1" stop-color="#F50"></stop>
      </linearGradient>
      <linearGradient
        id="g__hrzMuihG"
        x1="12"
        x2="16.7"
        y1="14.8"
        y2="14.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="h__hrzMuihG"
        x1="9"
        x2="17.6"
        y1="17.5"
        y2="11.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="red"></stop>
        <stop offset="1" stop-color="red" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="i__hrzMuihG"
        x1="13.2"
        x2="22"
        y1="12"
        y2="22.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="j__hrzMuihG"
        x1="12"
        x2="28"
        y1="23.4"
        y2="23.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FD6E35"></stop>
        <stop offset="1" stop-color="#F50"></stop>
      </linearGradient>
      <linearGradient
        id="k__hrzMuihG"
        x1="12"
        x2="16.7"
        y1="23.4"
        y2="23.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="l__hrzMuihG"
        x1="9"
        x2="17.6"
        y1="26"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="red"></stop>
        <stop offset="1" stop-color="red" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="m__hrzMuihG"
        x1="13.2"
        x2="22"
        y1="20.5"
        y2="31.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#fff"></stop>
        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
      </linearGradient>
      <filter
        id="a__hrzMuihG"
        width="33.1"
        height="34.5"
        x="4"
        y="3"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation=".9"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"></feColorMatrix>
        <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
      </filter>
      <filter
        id="e__hrzMuihG"
        width="20.7"
        height="22.7"
        x="10"
        y="8"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"></feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

const Esea = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#167C3C"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    stroke="#167C3C"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path d="M18.74 4l-6.808 8.995-11.932 0.183 7.776 5.959-6.385 9.171 11.317-5.447 7.615 5.765v-9.489l11.677-5.767-23.005 5.365c0.792-0.797 1.5-1.672 2.12-2.609 0.407-0.74 0.688-1.541 0.817-2.38l7.459-0.204z" />{" "}
    </g>
  </svg>
);

export default function Pseudo() {
  const [dataJoueur, setDataJoueur] = useState(null);
  const searchParams = useSearchParams();
  const search = searchParams?.get("pseudo") ?? "";
  console.log(search);

  useEffect(() => {
    handleSearch();
  }, []);

  async function handleSearch() {
    if (search.trim() === "") return;

    try {
      const response = await fetch(
        `/api/joueur?pseudo=${encodeURIComponent(search)}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDataJoueur(data);
      console.log(data);
      console.log(data.payload.memberships);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  }

  function getMembershipSVG(memberships: any[]) {
    if (!memberships) return null;
    return memberships.map((membership, index) => {
      if (membership === "premium") return <Premium key={index} />;
      if (membership === "plus") return <Plus key={index} />;
      if (membership === "esea") return <Esea key={index} />;
      return null;
    });
  }

  interface DataJoueur {
    payload: {
      avatar: string;
      nickname: string;
      cover_image_url: string;
      games: {
        cs2: {
          faceit_elo: number;
        };
      };
      memberships: string[];
    };
  }

  function getSkillLevelImage(skillLevel: any) {
    switch (skillLevel) {
      case 1:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_1_svg.svg";
      case 2:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_2_svg.svg";
      case 3:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_3_svg.svg";
      case 4:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_4_svg.svg";
      case 5:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_5_svg.svg";
      case 6:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_6_svg.svg";
      case 7:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_7_svg.svg";
      case 8:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_8_svg.svg";
      case 9:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_9_svg.svg";
      case 10:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_10_svg.svg";
      default:
        return "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_0_svg.svg";
    }
  }

  return (
    <>
      <Nav />
      <div className="flex justify-center bg-muted/75"></div>
      {dataJoueur && dataJoueur.payload ? (
        <>
          <div
            className="relative flex justify-center items-center h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                dataJoueur.payload.cover_image_url || defaultCoverImage
              })`,
            }}
          >
            <div className="flex items-center gap-4 bg-black/90 p-4 rounded">
              <img
                src={dataJoueur.payload.avatar || User.src}
                alt="Photo de profile"
                className="rounded border-2 border-white"
                width={110}
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-medium text-white flex items-center">
                  {dataJoueur.payload.nickname}{" "}
                  <span className="ml-2 flex items-center gap-1">
                    {getMembershipSVG(dataJoueur.payload.memberships)}
                  </span>
                </h2>
                <p className="font-bold flex items-center text-lg text-white items-center">
                {dataJoueur.payload.games.cs2.skill_level && (
                      <img
                        src={getSkillLevelImage(
                          dataJoueur.payload.games.cs2.skill_level
                        )}
                        alt={`Skill level ${dataJoueur.payload.games.cs2.skill_level}`}
                        className="rounded-lg"
                        width={28}
                      />
                    )}
                  <span className="font-medium">
                    {dataJoueur.payload.games.cs2.faceit_elo}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col mx-auto justify-center gap-4 p-4">
              <div className="bg-black p-4 rounded-lg">
                <h3 className="text-xl font-bold flex gap-2 text-white">
                  <span className="border-l-2"></span>Counter-Strike 2
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col items-center">
                  {dataJoueur.payload.games.cs2.skill_level && (
                      <img
                        src={getSkillLevelImage(
                          dataJoueur.payload.games.cs2.skill_level
                        )}
                        alt={`Skill level ${dataJoueur.payload.games.cs2.skill_level}`}
                        className="rounded-lg"
                        width={40}
                      />
                    )}
                    <p className="text-white">
                      {dataJoueur.payload.games.cs2.faceit_elo}
                    </p>
                  </div>
                  <div>
                    <p className="text-white">NaN% Win Rate</p>
                  </div>
                </div>
              </div>
              <div className="bg-black p-4 rounded-lg">
                <h3 className="text-xl font-bold flex gap-2 text-white">
                  <span className="border-l-2"></span>Counter-Strike: Global
                  Offensive
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col items-center">
                  {dataJoueur.payload.games.csgo?.skill_level  && (
                      <img
                        src={getSkillLevelImage(
                          dataJoueur.payload.games.csgo?.skill_level
                        ) || "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_skill-icons_skill_level_0_svg.svg"}
                        alt={`Skill level ${dataJoueur.payload.games.csgo.skill_level}`}
                        className="rounded-lg"
                        width={40}
                      />
                    )}
                    <p className="text-white">
                      {dataJoueur.payload.games.csgo?.faceit_elo || ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-white">NaN% Win Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
