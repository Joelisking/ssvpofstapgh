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
      'The Society of St. Vincent de Paul of the St. Thomas Aquinas Parish will be 40 years in 2027. A committee will be formed and inaugurated during the conference meeting. This committee will be in charge of planning activities from 2025 to 2027 where the 40th anniversary will be climaxed. The society request’s that members volunteer to be part of the 40th Anniversary Planning Committee. The society will also like to climax the 40th anniversary with a legacy project hence, the need to start preparations immediately.',
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
      'The society will have it’s annual training for new and existing members. The training facilitator will be Rev. Fr. Francis Kamau Wanderi from Kenya. Some sister conferences will be invited for this activity. The committee members for this training program will be Sis. Priscilla Asempa Antwi and Bro. Gabriel Ankasiba.',
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
    src: '/home/hero/carousel/ssvp-exec-1.jpg',
    alt: 'Induction ceremony 1',
  },
  {
    src: '/home/hero/carousel/ssvp-exec-2.jpg',
    alt: 'Induction ceremony 2',
  },
  {
    src: '/home/hero/carousel/ssvp-exec-3.jpg',
    alt: 'Induction ceremony 3',
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
    name: 'Bro. Emilio Owusu Asante',
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
    src: '/home/hero/carousel/1.jpeg',
    alt: 'Event 1',
    caption: 'Annual Conference 2024',
    category: 'events',
  },
  {
    src: '/home/hero/carousel/2.jpeg',
    alt: 'Event 2',
    caption: 'Team Building Workshop',
    category: 'events',
  },
  {
    src: '/home/hero/carousel/3.jpg',
    alt: 'Product 1',
    caption: 'New Product Launch',
    category: 'products',
  },
  {
    src: '/home/hero/carousel/4.jpeg',
    alt: 'Office 1',
    caption: 'Modern Workspace',
    category: 'office',
  },
  {
    src: '/home/news/1.jpg',
    alt: 'Event 3',
    caption: 'Customer Appreciation Day',
    category: 'events',
  },
  {
    src: '/home/news/2.jpg',
    alt: 'Product 2',
    caption: 'Innovation Showcase',
    category: 'products',
  },
];
