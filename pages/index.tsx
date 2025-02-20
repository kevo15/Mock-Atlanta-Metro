import React from "react";
import Link from "next/link";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { blogPosts } from "../data/blogPosts";

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
    fontFamily: '"Open Sans", "Lora", sans-serif',
  },
});

const BlogList: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
        >
          Latest Insights from Our Notary Blog
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid
              item
              xs={12}
              md={6}
              key={post.id}
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <ArticleIcon
                      sx={{ color: theme.palette.secondary.main, mr: 1 }}
                    />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {post.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.summary}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    By {post.author} | {post.date}
                  </Typography>
                </CardContent>
                <CardActions sx={{ pt: 0 }}>
                  <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.common.white,
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            textAlign: "center",
            color: theme.palette.common.white,
          }}
        >
          <ContactMailIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            Need a Notary?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Contact us today to schedule an appointment with our trusted notary
            professionals.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: theme.palette.common.white,
              borderColor: theme.palette.common.white,
              borderRadius: "20px",
              textTransform: "none",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: theme.palette.common.white,
                color: theme.palette.primary.main,
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default BlogList;
