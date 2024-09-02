import { IconType } from "react-icons"
import { IoLogoGithub } from "react-icons/io5"

export interface WorksData {
    id?: number
    title: string
    description: string
    thumbnailUrl: string
    tags: string[]
    buttons?: { buttonTitle: string; url: string; Icon: IconType }[]
}

export const works: WorksData[] = [
  {
    id: 1,
    title: "Coming Soon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, tempor a eros sit amet, consectetur lacinia enim. Quisque id luctus magna. Ut ac enim ipsum. Vestibulum blandit odio in nibh commodo, sit amet pharetra dui vehicula. Cras aliquam risus quis risus malesuada suscipit. Morbi tempus, elit id maximus laoreet, mauris mauris vulputate mauris.",
    thumbnailUrl: "https://picsum.photos/200/300",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    buttons: [
      {
        buttonTitle: "GitHub",
        url: "https://github.com/",
        Icon: IoLogoGithub
      },
    ],
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula libero, tempor a eros sit amet, consectetur lacinia enim. Quisque id luctus magna. Ut ac enim ipsum. Vestibulum blandit odio in nibh commodo, sit amet pharetra dui vehicula. Cras aliquam risus quis risus malesuada suscipit. Morbi tempus, elit id maximus laoreet, mauris mauris vulputate mauris.",
    thumbnailUrl: "https://picsum.photos/200/300",
    tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    buttons: [
      {
        buttonTitle: "GitHub",
        url: "https://github.com/",
        Icon: IoLogoGithub
      },
    ],
  },
];

