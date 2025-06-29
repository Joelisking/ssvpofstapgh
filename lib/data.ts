import carouselImg1 from '@/public/home/hero/carousel/1.jpeg';
import carouselImg2 from '@/public/home/hero/carousel/2.jpeg';
import carouselImg3 from '@/public/home/hero/carousel/3.jpg';
import carouselImg4 from '@/public/home/hero/carousel/4.jpeg';
import { ItemType } from './types';
import { GalleryImage } from '@/lib/types';

export const carouselImages = [
  { src: carouselImg1, alt: 'Hero Image 1' },
  { src: carouselImg2, alt: 'Hero Image 2' },
  { src: carouselImg3, alt: 'Hero Image 3' },
  { src: carouselImg4, alt: 'Hero Image 4' },
];

export const items: ItemType[] = [
  {
    id: 1,
    url: '/home/hero/carousel/1.jpeg',
  },
  {
    id: 2,
    url: '/home/hero/carousel/2.jpeg',
  },
  {
    id: 3,
    url: '/home/hero/carousel/3.jpg',
  },
  {
    id: 4,
    url: '/home/hero/carousel/4.jpeg',
  },
  {
    id: 5,
    url: '/home/upcoming-events/5.png',
  },
  {
    id: 6,
    url: '/home/upcoming-events/6.png',
  },
  {
    id: 7,
    url: '/home/upcoming-events/7.png',
  },
];

export const newsData = [
  {
    id: 1,
    image: '/home/news/1.jpg',
    date: '23 APRIL, 2025',
    title: 'What happens after the Pope dies?',
    link: '/news/what-happens-after-the-pope-dies',
  },
  {
    id: 2,
    image: '/home/news/2.jpg',
    date: '23 APRIL, 2025',
    title: "Pope Francis' testament",
    link: '/news/pope-francis-testament',
  },
  {
    id: 3,
    image: '/home/news/3.jpeg',
    date: '23 APRIL, 2025',
    title: 'Pope Francis: A compassionate voice for Africa',
    link: '/news/pope-francis-compassionate-voice-for-africa',
  },
  {
    id: 4,
    image: '/home/news/1.jpg',
    date: '24 APRIL, 2025',
    title: 'Another news title here',
    link: '/news/another-news',
  },
];

export const upcomingPrograms = [
  {
    date: '11TH FEBRUARY 2024',
    title: 'WORLD DAY FOR THE SICK',
    description:
      'This day has been declared the World Day for the Sick. The Society will have a joint program with the Health Professional Guild of the Parish. The plan is to visit sick home-bound parishioners and give them some fruits. This is to assure these people that the church still has them at heart and will continue to pray for speedy recovery for them.',
  },
  {
    date: '9TH MARCH 2024',
    title: 'LENTEN RETREAT',
    description:
      'This is the day for the Parish Lenten retreat and all members of the Society should be present. The retreat master is Most. Rev. Fr. Peter Paul Y. Ankyier, the Catholic Bishop of Damongo He is from the diocese where the society built a home for a widow five years ago.',
  },
  {
    date: '16TH MARCH 2024',
    title: 'LENTEN CHARITY ACTIVITY',
    description:
      'The Society will carry out the 2024 Lenten Charity Activity on this day. The charity activity will be at Djorkpo-Abuvienu where the community will be given a corn mill and cassava mill which will serve as an income generating activity for them. They will also be given stationery and school uniforms. The plight of this community was brought to the fore of the society by a member who was informed of the harsh living conditions of the people before and after the Akosombo Dam Spillage. The society then agreed to support them to the best of their ability. As the charity arm of the parish, the society agreed that this should be the charity activity for the Parish for Lent, thus the society would spear-head the Lenten Charity activity of the parish for 2024 with a visit and a donation of items to the people of Djorkpo-Abuvienu. The mode of raising funds for this activity will be donations from parishioners, donations from members and token from the SSVP of STAP coffers. The society had proposed in December 2023 that members are allowed to make their donations on monthly basis. The committee members for the activity are Bro. Derric Owusu Tinkler, Bro. Gabriel Ankasiba, Sis. Nana Ama Adomako, Sis. Joana Guo, Sis. Josephine Ecklu and Bro. Joseph Edward Yawson. Contributions for this activity has already begun and the society will need GHC 60, 000.00 to be able to execute this activity successfully.',
  },
  {
    date: '21ST APRIL 2024',
    title: 'INAUGURATION OF 40TH ANNIVERSARY PLANNING COMMITTEE',
    description:
      "The Society of St. Vincent de Paul of the St. Thomas Aquinas Parish will be 40 years in 2027. A committee will be formed and inaugurated during the conference meeting. This committee will be in charge of planning activities from 2025 to 2027 where the 40th anniversary will be climaxed. The society request's that members volunteer to be part of the 40th Anniversary Planning Committee. The society will also like to climax the 40th anniversary with a legacy project hence, the need to start preparations immediately.",
  },
  {
    date: '25TH MAY 2024',
    title: 'WORLD DAY FOR CHILDREN',
    description:
      'The Holy Father, Pope Francis has declared the 25th of May each year as World Day for Children. As such it is the intention of the Society to have a charity activity for street Children. There would be day for street Children at the Missionary Sisters of Charity, Ashaiman. The day will begin with a Holy Mass to be presided by the Apostolic Nuncio after which there would be a soup-kitchen activity for Street Children. This program will be shared with the Sunday School to involve them in this program. The committee members for this activity are Sis. Joyce Agyei Amponsah, Bro. Alfred Atieku and Sis. Sandra Adelaide King. The society would expect a progress report on the 25th of February 2024.',
  },
  {
    date: '29TH JUNE 2024',
    title: 'TRAINING PROGRAM',
    description:
      "The society will have it's annual training for new and existing members. The training facilitator will be Rev. Fr. Francis Kamau Wanderi from Kenya. Some sister conferences will be invited for this activity. The committee members for this training program will be Sis. Priscilla Asempa Antwi and Bro. Gabriel Ankasiba.",
  },
  {
    date: '20TH JULY 2024',
    title: 'VISIT TO NSAWAM PRISONS',
    description:
      'As part of the World Day for the elderly and Grandparents, the Society intends to organize a soup-kitchen activity for some inmates of the Nsawam Prisons. The intention is to feed inmates above the age of 65 years old.',
  },
  {
    date: '21ST JULY 2024',
    title: 'WORLD DAY FOR THE ELDERLY AND GRANDPARENTS',
    description:
      'The would be a social gathering after the 9:00 am mass for all parishioners who are above the age of 65 years old. This activity will be a continuation of the World Day for the Elderly and Grandparents. These two activities will be facilitated by Bro. Lawrence Baalu, Bro. Collins Amuzu and Sis. Ewuraajoa Amedior.',
  },
  {
    date: 'SEPTEMBER 2024',
    title: 'SSVP OF STAP AWARENESS MONTH',
    description:
      'The month of September is the SSVP of STAP Awareness month celebration. Series of activities will be put up by the committee assigned for the whole month. Also, the 9th of September will be observed as the Blessed Fredrich Ozanam day while 27th September will be the Feast Day OF St. Vincent de Paul. The committee members are Bro. Derrick Owusu Tinkler, Sis. Josephine Ecklu and Bro. Gabriel Korankye',
  },
  {
    date: '17TH NOVEMBER 2024',
    title: 'WORLD DAY FOR THE POOR',
    description:
      'The society wishes to have a charity activity at the House of St. Francis Home, Ashaiman. This is a home for patients recovering from drug and alcohol addiction. The committee members for this activity will be communicated to in the course of the year',
  },
  {
    date: 'DECEMBER 2024',
    title: 'CHRISTMAS ACTIVITIES',
    description:
      'To kick start the Christmas Activities, an advent retreat will be organized on the 7th of December 2024. There will also be a charity activity for Christmas, preferably for our wards.',
  },
];

export const executivesCarouselImages = [
  {
    src: '/programs/1.png',
    alt: '',
  },
  {
    src: '/programs/2.png',
    alt: '',
  },
  {
    src: '/programs/3.png',
    alt: '',
  },
];

export const executivesData = [
  { role: 'President', name: 'Bro. Gabriel Asempa Antwi' },
  { role: 'Vice President', name: 'Sis. Anita Ghansah' },
  { role: 'Secretary', name: 'Sis. Joan Acheampong' },
  { role: 'Assistant Secretary', name: 'Sis. Ewuraajoa Amedior' },
  { role: 'Treasurer', name: 'Bro. Joel Attey' },
  {
    role: 'Organising Secretary / Training Officer',
    name: 'Bro. Emilio Owusu Asante',
  },
  {
    role: 'Assistant Organising Secretary',
    name: 'Bro. Gabriel Apatewen Ankasiba',
  },
];

export const news = [
  {
    image: '/home/news/1.jpg',
    date: '23 APRIL, 2025',
    title: 'What happens after the Pope dies?',
    description:
      'The Pope is the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church. The Pope is also the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church.',
    link: '/news/what-happens-after-the-pope-dies',
  },
  {
    image: '/home/news/2.jpg',
    date: '23 APRIL, 2025',
    title: "Pope Francis' testament",
    description:
      'The Pope is the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church. The Pope is also the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church.',
    link: '/news/pope-francis-testament',
  },
  {
    image: '/home/news/3.jpeg',
    date: '23 APRIL, 2025',
    title: 'Pope Francis: A compassionate voice for Africa',
    description:
      'The Pope is the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church. The Pope is also the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church.',
    link: '/news/pope-francis-compassionate-voice-for-africa',
  },
  {
    image: '/home/news/1.jpg',
    date: '24 APRIL, 2025',
    title: 'Another news title here',
    description:
      'The Pope is the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church. The Pope is also the head of the Catholic Church and the successor of St. Peter. He is the highest authority in the Catholic Church and is responsible for the spiritual well-being of the Catholic Church.',
    link: '/news/another-news',
  },
];

export const sampleImages: GalleryImage[] = [
  {
    src: 'https://drive.google.com/uc?export=view&id=1-8Cn_niXIyX_F5F19kOmlbwdxt3LL9wJ',
    alt: 'Gallery image 1',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=11GZPxHKCj-iHmkjxaf2O61aG2hiOA65p',
    alt: 'Gallery image 2',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=11HNXpOAm35w-enGy_Tm_Ya9t1udH2tWW',
    alt: 'Gallery image 3',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=11_cPAFCwy2O3iuozwK0WEfXnN80vhVi6',
    alt: 'Gallery image 4',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=12AAkMLZjfxm-ksjtDQb46bwlOP5GK_AU',
    alt: 'Gallery image 5',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=12fb8eVZ5SwP4u769j8bmDAjlFTA-eaHD',
    alt: 'Gallery image 6',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=14ltktmBQj4ClwCFopr_9tBb4wMAk5EOq',
    alt: 'Gallery image 7',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=15aORrl6GnlKvZeH7RgLF726We5jaxPxL',
    alt: 'Gallery image 8',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=16jhwddHrDqN1aLxAMXuh0a7R_tHJLWaw',
    alt: 'Gallery image 9',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=16ynUTQIRorZxCTwhOxjBMrtVmosPgTSb',
    alt: 'Gallery image 10',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=177l36XFGXSPaAbXqIG4WCSFjSZF8irop',
    alt: 'Gallery image 11',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=17JusTjfVGoTxBCTyDPOj7cobNm4l7oa5',
    alt: 'Gallery image 12',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=17KWw76a4GePeBKZXBoNILabQPAWkKq0T',
    alt: 'Gallery image 13',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=17RgJH7P-ss4SY7jUxHYbIRJndj4hQp61',
    alt: 'Gallery image 14',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=17i9oJjFuWBg9Xgp3Gm0hs3t1zzjbzmMU',
    alt: 'Gallery image 15',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=181EZOCCwiuAAKsiRgnT1YkxO-fSTKvMa',
    alt: 'Gallery image 16',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=18YikDrWnh6bDc71fgG8yLURvcpIy9SMD',
    alt: 'Gallery image 17',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=18tCnbF4CGPWlZD0N06iUGcZ_wAsuZQHe',
    alt: 'Gallery image 18',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1A9sv-V7LjbuC161gD5v6fgP7Ih8ufdjL',
    alt: 'Gallery image 19',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1C-oT2fzc2mf0JweOn11ksycu6dB3HgeU',
    alt: 'Gallery image 20',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1C9GR9RcCZudD6w-ABbZ5MH7WQyxm2mWp',
    alt: 'Gallery image 21',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1EOCtAhZb8hJ0NJ81nFFAE5G2donw7jtN',
    alt: 'Gallery image 22',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Eky2iXcjj-S0P0pXivxuGciyAF1UX-lo',
    alt: 'Gallery image 23',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Fk7a338v-dw9dLOBUqgjAVUGMlA9c0fl',
    alt: 'Gallery image 24',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1G4z6PnjCywnFrk17jutK7FezccSK-6qt',
    alt: 'Gallery image 25',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1GLNOw5YUt3zSGqDjEFUcf67_HfTex9gQ',
    alt: 'Gallery image 26',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1GQD383Q_4W6tOLUVtMaWwoXzlmFHiPp0',
    alt: 'Gallery image 27',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1GWs9KwLsXd0mjK7-fDme3MK13-x0o-l8',
    alt: 'Gallery image 28',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Glr9-SfdNddpSpCLU4Zi5J8fUp9hEjlI',
    alt: 'Gallery image 29',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1JVUZKyDlCa0O4iS_ddAGRqv7QCLCAQb9',
    alt: 'Gallery image 30',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1K_d9ZFvKySeBXMGUwKfVJdjBsErv0Syq',
    alt: 'Gallery image 31',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1KaMMunJ1CRsRvXF5tyHfhlkN3ywyyX62',
    alt: 'Gallery image 32',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Khy63Ck04m3kI8jrMAJ5ZeOLgncHZZzQ',
    alt: 'Gallery image 33',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1MSX8tMYpKs1b7CVNrHAbXoFcSEXePrmt',
    alt: 'Gallery image 34',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Mtdg9W5LMqJPX4hwWA0dhS1Blkn1wnPS',
    alt: 'Gallery image 35',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1NDJle5LWwqekT5hDcaYsB_izDXmBoQV-',
    alt: 'Gallery image 36',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1NHwk-PaEzK_p08pml-OQ1xqeaxzXeyWH',
    alt: 'Gallery image 37',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Nh_zu7rAsUS2fcTao_ueE0yyqNYjG0ER',
    alt: 'Gallery image 38',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1NtI7OPcCxUeiwbBIaK4ZCrcMRUDZCVuB',
    alt: 'Gallery image 39',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1O9BKnPgekdItUhkSDAwmrAtgHIvcVeGE',
    alt: 'Gallery image 40',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1OH9ghYsHdC57VnY7WS_7Ft6o3QkAawDZ',
    alt: 'Gallery image 41',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ONcmWupHbWABFU3gjOCtz99_aBLUQ_z5',
    alt: 'Gallery image 42',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1P80ply1I4gUdXSOBhkdHjWpzvQVPet1M',
    alt: 'Gallery image 43',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1PO60d4XaZytyUFhyerJmWfH4i2y-_Cir',
    alt: 'Gallery image 44',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1QQYv4Pa8J0i533fpZfpuL09oI3PX9Fxo',
    alt: 'Gallery image 45',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1QWVTUA09bPwjVfU5WVEqZ0cQb_QNuA2H',
    alt: 'Gallery image 46',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1QkEMPvZyaiJPaaLOzExP5ESQ-xjhUmiv',
    alt: 'Gallery image 47',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1R7ncEU_y2rT9hqoGJbbF00ALsT302Ya7',
    alt: 'Gallery image 48',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1RrACB9aF9i7FRrrjPOiVF2ZkRoZnc6Kt',
    alt: 'Gallery image 49',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Slpak8rJUrmn-ngD1e0uwOYSAPWbbZfi',
    alt: 'Gallery image 50',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1SsHP4w-qca2c3kLRTANOVjbnbLwtgWdO',
    alt: 'Gallery image 51',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1T1S8pJqaESHXb1y-SMKMwQmVjBWZfCmc',
    alt: 'Gallery image 52',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1T5aOh6aLbbfvhcZuN0TJJbe6IWPXlWsJ',
    alt: 'Gallery image 53',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1TDLoxdN7h8tiZs_In5LvzW6F6ahtGue9',
    alt: 'Gallery image 54',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Th6_VhK2rLfokK5kwXviHWDrf1N5AUEk',
    alt: 'Gallery image 55',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1TyPsnJTkXxYyl0gY1vBajdbp32iyfNPb',
    alt: 'Gallery image 56',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1U3oVrpKp8G4EAE2aZbAOFZluLcW5679H',
    alt: 'Gallery image 57',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1VNQgdYAaem_ez_E4iAPHF9E-fblGE3ML',
    alt: 'Gallery image 58',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1X4X2OztDYiTzWg9UYHg7zJVQwKGlElNf',
    alt: 'Gallery image 59',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1Z2qS3KpxsJEf1_GTy3gXgY0bMa6Df0dN',
    alt: 'Gallery image 60',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ZosvUrQO1Mo5a9t5h2uLhDMhZ6HET2jX',
    alt: 'Gallery image 61',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1aCqCBt8yd8oBBMUcmeTp4lXcFIpnR9dP',
    alt: 'Gallery image 62',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1aZe0B5eN0sNG4Thmlnt_W5Wd16b-Pw5t',
    alt: 'Gallery image 63',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1c0qD4Vp8sJ3A35NHc4riDb9X5cymBBl6',
    alt: 'Gallery image 64',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1cfqqUN3mdh5d1oBkl1GI7aU3ogH-Gwvn',
    alt: 'Gallery image 65',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1csJObiFoSXp289flN5yB86KjNDYktnpn',
    alt: 'Gallery image 66',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1dpeUKpn01kQXqsyv-YfDABmKRWk133Kh',
    alt: 'Gallery image 67',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1eooPGz9AbX1oLytvgCve5d1p_K6qWf-_',
    alt: 'Gallery image 68',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1fX-7Zg4RR6dLiU0zzvR6a9idKYp9osf1',
    alt: 'Gallery image 69',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1gd_qM6Rus512Ye6QANfN4njTafdUbJOS',
    alt: 'Gallery image 70',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1iYTVVOp04oOSsT8Es3YzCxzUINtiDot6',
    alt: 'Gallery image 71',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1iYzOWCBagIbXBFQkCx6k4DO4KfnzI5iS',
    alt: 'Gallery image 72',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1iwaE_fpDg6J17PTYWZvC9iTX6GNdtfLg',
    alt: 'Gallery image 73',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1jFaAEGFJZ82HR5YgnJTZau6FEjl5aPTu',
    alt: 'Gallery image 74',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1jlCpqMzBpzvIJLEJ-kR3_qNQZCQcT0Cj',
    alt: 'Gallery image 75',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1jxR5ufCwEXlSzYvyi2UgPPDNaZqskb6T',
    alt: 'Gallery image 76',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1k7n07VhOvWe56XF_yZMsyZ0Fim3nF939',
    alt: 'Gallery image 77',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1lVU1klLaXGgFvVjDsxmFxJReQMykeC2d',
    alt: 'Gallery image 78',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1maDEeu8FpHnlOvnTaXA-6vhs1PC69rKy',
    alt: 'Gallery image 79',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1mg8zG9ohpa_Kry9XgiGK-ozGyZ0yg9w5',
    alt: 'Gallery image 80',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1mh386iWYJFoMJWYi7caJRHpWTnKtzn4l',
    alt: 'Gallery image 81',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1mzwBxnpJuja4jaS_Rymq9xJsLHF74Wi7',
    alt: 'Gallery image 82',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1nTcQyPhXSU6nLbqGnOwFkG0LVF_yX1RT',
    alt: 'Gallery image 83',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1nn4ZT1drQn8_fvthegUx2O1IGChuRpFR',
    alt: 'Gallery image 84',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1oOFBxka-VRoAU4-KRqzs0brvNv0U4U4R',
    alt: 'Gallery image 85',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1p3F3CNSw28JHoK_2aitBs2ElgBe_5nMe',
    alt: 'Gallery image 86',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1pY6IBMZwRtFks2zQ6sE0vvsHPxmInvCa',
    alt: 'Gallery image 87',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ppvhZBN3x6AZR9pNJhGkllStLvLY7VjN',
    alt: 'Gallery image 88',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1s-meh3niS5_VB90nKIMdMF9HgXrg_8AF',
    alt: 'Gallery image 89',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1si61TabhNGYSi04MNM8MLWYZUB-vDv6Y',
    alt: 'Gallery image 90',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1srMTmqigNRKrHtfcNFm7rr9gVLMzEZ84',
    alt: 'Gallery image 91',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1t3AmxAlwE37DhNJ1YakBExjEDvhRwT24',
    alt: 'Gallery image 92',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1tp60W0xEg-mDPsB5Cv5j0zAhkgfspaun',
    alt: 'Gallery image 93',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1ugI1M9-X9Olkfid2xdqB6npDU7Fxomzi',
    alt: 'Gallery image 94',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1vAztv1dWeOnIffCQ3u2AV8iUyok7QWCN',
    alt: 'Gallery image 95',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1vL0aCUIDlQCJ8v10nqZr7-RuyC9CvY-n',
    alt: 'Gallery image 96',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wEeG2jYk9NfUduGv5GlmuxWL03906UxU',
    alt: 'Gallery image 97',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wMqR7pZPvZKnx7L1D5QKb-JbOylOZPY8',
    alt: 'Gallery image 98',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wfsdW2bsYG6gMYwXswrpklX-L879DB75',
    alt: 'Gallery image 99',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1xKdVC86mADDKqyuWJnJ2mMwp3jrKL470',
    alt: 'Gallery image 100',
  },
];
