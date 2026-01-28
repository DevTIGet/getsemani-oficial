import { useState, useEffect } from "react";
import { MOBILE_BREAKPOINT } from "@/app/constants/carousel";

/**
 * Hook to detect if the current viewport is mobile size
 * @returns boolean indicating if viewport width is below mobile breakpoint
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};
