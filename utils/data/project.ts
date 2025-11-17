export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "12V Solenoid Password Lock",
    description: "Simple 12V solenoid lock with passwords using AVR microcontroller",
    image: "/assets/image/IMG_20250626_133257.jpg",
    link: "https://github.com/leafhuy/DigitallockbaseCode",
  },
  {
    name: "SATELLITE GROUND STATION",
    description: "Receiving realtime data from satellite using SDR system.",
    image: "/assets/image/ami_rgb_Clean_Longwave_IR_Window_Band_map.png",
    link: "https://github.com/leafhuy/SatelliteProject",
  },
];
