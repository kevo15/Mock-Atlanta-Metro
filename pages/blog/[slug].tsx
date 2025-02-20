import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Container,
  Box,
  Typography,
  Grid,
  CardMedia,
  Button,
  IconButton,
  Avatar,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";
import { blogPosts, BlogPost } from "../../data/blogPosts";
import Claybrooks from "../../public/YolandaClaybrooks.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#ffb300",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    body1: {
      fontFamily: '"Lora", serif',
    },
  },
});

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ position: "relative", mb: 4 }}>
            <Box sx={{ position: "relative", height: { xs: 250, md: 500 } }}>
              <CardMedia
                component="img"
                image={post.image}
                alt="Featured Image"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginTop: 3,
                  borderRadius: 2,
                  transition: "transform 0.5s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    p: 2,
                    m: 2,
                    borderRadius: 1,
                    maxWidth: "90%",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1.75rem", md: "3rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1">
                      By {post.author}
                    </Typography>
                    <Typography variant="subtitle2">{post.date}</Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderColor: "#ffb300", color: "#ffb300" }}
                    >
                      Legal Insights
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, mb: 4, display: { xs: "none", md: "block" } }}
                >
                  <Typography variant="h6" gutterBottom>
                    Table of Contents
                  </Typography>
                  <List dense>
                    {[
                      { label: "Introduction", id: "introduction" },
                      { label: "Main Discussion", id: "main" },
                      { label: "Additional Insights", id: "insights" },
                      { label: "Conclusion", id: "conclusion" },
                    ].map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          component="a"
                          href={`#${item.id}`}
                          sx={{
                            color: theme.palette.primary.main,
                            transition: "color 0.3s",
                            "&:hover": {
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Box sx={{ mb: 4 }}>
                  <Typography id="introduction" variant="h4" gutterBottom>
                    Introduction
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {post.introduction}
                  </Typography>

                  <Typography id="main" variant="h4" gutterBottom>
                    Main Discussion
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {post.mainDiscussion}
                  </Typography>

                  <Typography id="insights" variant="h4" gutterBottom>
                    Additional Insights
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {post.additionalInsights}
                  </Typography>

                  <Typography id="conclusion" variant="h4" gutterBottom>
                    Conclusion
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {post.conclusion}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    backgroundColor: "#f9f9f9",
                    borderRadius: 2,
                    mb: 4,
                  }}
                >
                  <Avatar
                    alt={post.author}
                    src={Claybrooks.src}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{post.author}</Typography>
                    <Typography variant="body2">
                      {post.author} is a seasoned expert in notary services and
                      legal documentation. With extensive experience in the
                      field, their insights offer valuable guidance.
                    </Typography>
                    <Link href="/" legacyBehavior>
                      <Button size="small" color="primary" sx={{ mt: 1 }}>
                        View More Posts
                      </Button>
                    </Link>
                  </Box>
                </Box>

                <Box component="section" sx={{ mb: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Leave a Reply
                  </Typography>
                  <TextField
                    label="Your Comment"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" color="primary">
                    Submit Comment
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: { xs: "flex", md: "block" },
                  flexDirection: "row",
                  gap: 2,
                  mb: 4,
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    flex: 1,
                    p: 2,
                    minWidth: 0,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Related Posts
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  <List>
                    {blogPosts
                      .filter((p) => p.slug !== post.slug)
                      .map((related) => (
                        <ListItem key={related.id} disablePadding>
                          <ListItemButton
                            component="a"
                            href={`/blog/${related.slug}`}
                            sx={{
                              color: theme.palette.primary.main,
                              transition: "color 0.3s",
                              "&:hover": {
                                color: theme.palette.secondary.main,
                              },
                            }}
                          >
                            <ListItemText primary={related.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                  </List>
                </Paper>

                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    p: 1,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                  }}
                >
                  <IconButton color="primary">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="primary">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
