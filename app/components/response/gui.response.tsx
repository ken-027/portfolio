import { useEffect, useState } from "react";
import { switchStyle } from "~/shared/local-storage";
import PageLoaderLayout from "../layout/page-loader.layout";

export default function GUIResponse() {
  useEffect(() => {
    switchStyle("gui");

    setTimeout(() => {
      location.reload();
    }, 3000);
  }, []);

  return <PageLoaderLayout />;
}
