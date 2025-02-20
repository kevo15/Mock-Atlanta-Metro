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
    author: "Jane Doe",
    date: "Feb 15, 2025",
    image: "https://picsum.photos/640/480?random=3",
  },
  {
    id: 2,
    slug: "digital-age-notary",
    title: "The Evolution of Notary Services in the Digital Age",
    summary:
      "Explore how digital notarization is transforming the legal landscape and what it means for traditional notary services.",
    author: "John Smith",
    date: "Feb 10, 2025",
    image: "https://picsum.photos/640/480?random=2",
  },
];
