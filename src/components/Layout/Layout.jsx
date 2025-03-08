import React from "react";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import { Box, Button, Container, Stack, Typography, Link } from "@mui/material";
import headerImg from "../../assets/images/hero-l.png";
import Grid from "@mui/material/Grid2";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import mentorshipImg from "../../assets/images/mentorship.jpg";
import freelanceImg from "../../assets/images/freelance-job.png";
import arcImg from "../../assets/images/visit-arc (1).svg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Layout = () => {
  return (
    <>
      {/*-------Navbar-------- */}
      <ResponsiveAppBar />
      {/* -------Header-------- */}
      <Box
        component="header"
        sx={{
          backgroundColor: "#0A526D",
          height: { xs: "auto", sm: "500px", md: "600px" },
          minHeight: "400px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",

          pt: { xs: "150px", sm: "125px", md: "68px" },
          position: "relative",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
          Find a developer for <br /> live mentorship & freelance projects
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#F95C3C",
            fontSize: { xs: "16px", sm: "18px", md: "19px" },
            padding: "10px 20px",
            marginBlock: { xs: "30px" },
          }}
        >
          Get Help Now
        </Button>
        <Box
          component="img"
          src={headerImg}
          alt="a man setting with a laptop"
          sx={{
            width: { xs: "300px", sm: "400px", md: "500px" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: { xs: "-45px", sm: "-60px", md: "-70px" },
          }}
        />
      </Box>
      {/* -------Body -------- */}
      <Container maxWidth="lg">
        {/* ----MetnorShip Section --- */}
        <Box
          sx={{
            paddingBlock: "40px",
            paddingInline: "20px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              paddingTop: "30px",
              color: "#00465f",
              fontWeight: "bold",
              fontSize: { xs: "1.25rem", md: "2.125rem" },
            }}
          >
            Get Help From Vetted Software Developers
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{ paddingBlock: "30px", display: "flex", alignItems: "center" }}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#00465f" }}
                >
                  One-on-one live mentorship
                </Typography>

                <Box
                  sx={{
                    paddingBlock: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <BugReportIcon color="primary" />
                    <Typography sx={{ color: "#023B4A" }}>
                      Debug with the help of an expert
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <PersonIcon color="primary" />
                    <Typography sx={{ color: "#023B4A" }}>
                      Personalize your learning experience
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <DescriptionIcon color="primary" />
                    <Typography sx={{ color: "#023B4A" }}>
                      Get answers to complex problems
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#F95C3C",

                    padding: "10px 20px",

                    width: "fit-content",
                  }}
                >
                  Find A Mentor
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                component="img"
                src={mentorshipImg}
                sx={{
                  padding: 2,
                  width: "80%",
                  height: "350px",
                  objectFit: "contain",
                }}
                alt="a man standing in front of a board"
              />
            </Grid>
          </Grid>
        </Box>
        {/* -----FREELANCE section---- */}

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",

            marginBottom: "20px",
          }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="img"
              src={freelanceImg}
              sx={{
                padding: 2,
                width: "80%",
                height: "350px",
                objectFit: "contain",
              }}
              alt="two persons"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#00465f" }}
              >
                Project-based freelance <br /> work
              </Typography>

              <Box
                sx={{
                  paddingBlock: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <BugReportIcon color="primary" />
                  <Typography sx={{ color: "#023B4A" }}>
                    Find experts for on-demand code review
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <PersonIcon color="primary" />
                  <Typography sx={{ color: "#023B4A" }}>
                    Build features for your existing product
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <DescriptionIcon color="primary" />
                  <Typography sx={{ color: "#023B4A" }}>
                    Turn your idea into an MVP
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#F95C3C",

                  padding: "10px 20px",

                  width: "fit-content",
                }}
              >
                Find A Freelancer
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* -----arc section---- */}

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="img"
              src={arcImg}
              sx={{
                padding: 2,
                width: "80%",
                height: "350px",
                objectFit: "contain",
              }}
              alt="two persons"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#00465f", fontWeight: "bold" }}
              >
                arc()
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#00465f" }}
              >
                Hiring For a bigger project?
              </Typography>

              <Typography variant="body1" sx={{ color: "grey" }}>
                Arc helps you find senior developers for borth permanent <br />{" "}
                full time roles and 40+ hour contract projects
              </Typography>

              <Button
                variant="text"
                sx={{
                  color: "blue",

                  width: "fit-content",
                }}
              >
                Visit Arc to learn more <ArrowRightIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#00465F ", py: 4 }}>
        <Container>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Connect with 12000+ top developers anytime
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2d3748" }}
                >
                  Jessamyn Smith
                </Typography>
                <Typography variant="body1" sx={{ color: "#718096" }}>
                  Experienced Full Stack Web Developer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2d3748" }}
                >
                  Daniel Hamilton
                </Typography>
                <Typography variant="body1" sx={{ color: "#718096" }}>
                  Senior Software Engineer - Indeed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2d3748" }}
                >
                  Martijn Pieters
                </Typography>
                <Typography variant="body1" sx={{ color: "#718096" }}>
                  #1 Stack Overflow Python Answerer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2d3748" }}
                >
                  Ionică Bizău
                </Typography>
                <Typography variant="body1" sx={{ color: "#718096" }}>
                  Full Stack Developer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2d3748" }}
                >
                  Miroslav Kutăk
                </Typography>
                <Typography variant="body1" sx={{ color: "#718096" }}>
                  Senior iOS Developer
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2d3748" }}
                >
                  Ben Gottlieb
                </Typography>
                <Typography variant="body1" sx={{ color: "#718096" }}>
                  Senior iOS Developer and Consultant
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography
            sx={{ textAlign: "center", color: "white", marginTop: "10px" }}
          >
            Start working with our developers
          </Typography>
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F95C3C ",
                color: "white",
                fontWeight: "bold",

                borderRadius: 2,
                boxShadow: 3,
                "&:hover": {
                  backgroundColor: "#F95C3C ",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* -------Footer -------- */}
      <Box
        sx={{ bgcolor: "black", p: 6, textAlign: "center" }}
        component="footer"
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "white" }} gutterBottom>
              PRODUCTS
            </Typography>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Codementor
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Codamentor Events
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              DwrProjects
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Arc
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "white" }} gutterBottom>
              PAGES
            </Typography>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Become a Codementor
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              How It Works
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Find Mentors
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Find Freshmeers
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Find a Tutor
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "white" }} gutterBottom>
              COMMUNITY
            </Typography>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Blog
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Codementor For Students
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Codementor For Teams
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Code Review
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Pair Programming
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "white" }} gutterBottom>
              RESOURCES
            </Typography>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Best Web Design Software
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Coding Starter Kit
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Codementor Reviews
            </Link>
            <Link href="#" sx={{ color: "white", display: "block" }}>
              Best Language to Learn
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ color: "white", textAlign: "center", pt: 4 }}
        >
          Made By Asmaa Abdo @2025
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
