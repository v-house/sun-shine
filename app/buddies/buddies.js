const teams = [
  {
    id: "ug-buddies",
    section: "UG Mentors",
    teamName: "UG Buddies",
    teamPhotoUrl: "https://sunshine.iith.ac.in/images/about-slider/3.JPG",
    teamDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
    teamMembers: [
      {
        name: "K Vivek Kumar",
        photoUrl:
          "https://media.licdn.com/dms/image/D5603AQGbZ7Itnw3MzQ/profile-displayphoto-shrink_400_400/0/1694713180533?e=1703116800&v=beta&t=L03tSjIcO7Z7QMzy0uYLynu-ZVySjqFiNhTscxbD_-U",
        email: "cs21btech11026@iith.ac.in",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Screenshot_20230820-204831_Gallery%20-%20Ravipati%20Anvitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Engineering Science",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_20230311_151733%20-%20Agrim%20Singh.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "CSE",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230615-WA0023%20-%20Mehwish%20Naz.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/AB78A53A-A5E2-48D0-8960-8CEA3FDF400B%20-%20Mohammed%20Ayan.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_8648%20-%20Sreekar%20Cheela.jpeg",
        email: "cs21btech11026@iith.ac.in",
        phone: "0000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_20230820_115044%20-%20Kakkirala%20Bhavitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230817-WA0009%20-%20Dasari%20Ram%20Vasanth.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Snapchat-1593983593%20-%20Mane%20Pooja%20Vinod.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_0788%20-%20Sripadmanabha%20S.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/605C797F-A4C9-40D2-BF10-C404285C117A%20-%20Katherapaka%20Nikhil.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGBuddies/PXL_20230925_180531732.MP~2%20-%20Kondaparthy%20Anuraga%20Chandan.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230310-WA0021%20-%20Gogineni%20Yashmitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Shreya%20Sridhar%20-%20Shreya%20Sridhar.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  {
    id: "pg-buddies",
    section: "PG Buddies",
    teamName: "PG Buddies",
    teamPhotoUrl: "https://sunshine.iith.ac.in/images/about-slider/3.JPG",
    teamDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
    teamMembers: [
      {
        name: "K Vivek Kumar",
        photoUrl:
          "https://media.licdn.com/dms/image/D5603AQGbZ7Itnw3MzQ/profile-displayphoto-shrink_400_400/0/1694713180533?e=1703116800&v=beta&t=L03tSjIcO7Z7QMzy0uYLynu-ZVySjqFiNhTscxbD_-U",
        email: "cs21btech11026@iith.ac.in",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Screenshot_20230820-204831_Gallery%20-%20Ravipati%20Anvitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Engineering Science",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_20230311_151733%20-%20Agrim%20Singh.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "CSE",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230615-WA0023%20-%20Mehwish%20Naz.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/AB78A53A-A5E2-48D0-8960-8CEA3FDF400B%20-%20Mohammed%20Ayan.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_8648%20-%20Sreekar%20Cheela.jpeg",
        email: "cs21btech11026@iith.ac.in",
        phone: "0000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_20230820_115044%20-%20Kakkirala%20Bhavitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230817-WA0009%20-%20Dasari%20Ram%20Vasanth.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Snapchat-1593983593%20-%20Mane%20Pooja%20Vinod.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_0788%20-%20Sripadmanabha%20S.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/605C797F-A4C9-40D2-BF10-C404285C117A%20-%20Katherapaka%20Nikhil.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGBuddies/PXL_20230925_180531732.MP~2%20-%20Kondaparthy%20Anuraga%20Chandan.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230310-WA0021%20-%20Gogineni%20Yashmitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Shreya%20Sridhar%20-%20Shreya%20Sridhar.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  {
    id: "phd-buddies",
    section: "PhD Buddies",
    teamName: "PhD Buddies",
    teamPhotoUrl: "https://sunshine.iith.ac.in/images/about-slider/3.JPG",
    teamDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
    teamMembers: [
      {
        name: "K Vivek Kumar",
        photoUrl:
          "https://media.licdn.com/dms/image/D5603AQGbZ7Itnw3MzQ/profile-displayphoto-shrink_400_400/0/1694713180533?e=1703116800&v=beta&t=L03tSjIcO7Z7QMzy0uYLynu-ZVySjqFiNhTscxbD_-U",
        email: "cs21btech11026@iith.ac.in",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Screenshot_20230820-204831_Gallery%20-%20Ravipati%20Anvitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Engineering Science",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_20230311_151733%20-%20Agrim%20Singh.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "CSE",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230615-WA0023%20-%20Mehwish%20Naz.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/AB78A53A-A5E2-48D0-8960-8CEA3FDF400B%20-%20Mohammed%20Ayan.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_8648%20-%20Sreekar%20Cheela.jpeg",
        email: "cs21btech11026@iith.ac.in",
        phone: "0000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_20230820_115044%20-%20Kakkirala%20Bhavitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230817-WA0009%20-%20Dasari%20Ram%20Vasanth.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Snapchat-1593983593%20-%20Mane%20Pooja%20Vinod.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG_0788%20-%20Sripadmanabha%20S.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/605C797F-A4C9-40D2-BF10-C404285C117A%20-%20Katherapaka%20Nikhil.jpeg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGBuddies/PXL_20230925_180531732.MP~2%20-%20Kondaparthy%20Anuraga%20Chandan.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/IMG-20230310-WA0021%20-%20Gogineni%20Yashmitha.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        name: "Nancy Jewel Mcdonie",
        photoUrl:
          "https://sunshine.iith.ac.in/images/team-2023/UGMentors/Shreya%20Sridhar%20-%20Shreya%20Sridhar.jpg",
        email: "nancymomoland.com",
        phone: "00000000000",
        department: "Computer Science and Engineering",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
];

export default teams;
