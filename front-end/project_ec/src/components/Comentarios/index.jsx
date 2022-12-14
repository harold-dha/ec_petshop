import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../App.css";

// import required modules
import { Autoplay } from "swiper";

const Comentarios = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box sx={{ marginTop: "5rem" }}>
        <Typography textAlign="center" variant="h3" marginBottom="5rem">
          Comentarios Destacados
        </Typography>
        <Swiper
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jonthonel Requena Morales"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jonthonel Requena Morales"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jonthonel Requena Morales"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jonthonel Requena Morales"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jonthonel Requena Morales"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 300 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jonthonel Requena Morales"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Comentarios;
