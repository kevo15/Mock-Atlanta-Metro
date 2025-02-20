import notary from "../public/notary.png";
import gavel from "../public/notary2.png";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-notary",
    title: "Understanding Notarization: A Comprehensive Guide",
    summary:
      "Learn the essentials of notarization, its legal implications, and how a notary can help safeguard your documents.",
    author: "Yolanda Claybrooks",
    date: "Feb 15, 2025",
    image: notary.src,
  },
  {
    id: 2,
    slug: "digital-age-notary",
    title: "The Evolution of Notary Services in the Digital Age",
    summary:
      "Explore how digital notarization is transforming the legal landscape and what it means for traditional notary services.",
    author: "Yolanda Claybrooks",
    date: "Feb 10, 2025",
    image: gavel.src,
  },
];
