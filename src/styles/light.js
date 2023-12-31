import { createTheme, keyframes } from "@mui/material";

const light = createTheme({
  shadows: ["none"],
  typography: {
    fontFamily: "Anek Odia",
  },
  palette: {
    primary: {
      main: "rgb(255,255,255,0.5)",
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "black",
          padding: 0,
          ":hover": {
            color: "red",
            padding: 0,
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "black",
          padding: 0,
          // ":hover":{
          //   boxShadow:'1px 1px 2px 5px red'
          // }
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor: "#0d66c4",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "black",
          fontSize: 18,
          "&.Mui-selected": {
            color: "#0d66c4",
          },
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          minHeight: "100px",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: 50,
          width: 50,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "solid 1px #b3e5fc",
          width: "90%",
          backgroundColor: "transparent",
          transition: "transform 0.2s ease",

          ":hover": {
            transform: "scale(1.02)",
            boxShadow: "2px 2px 10px 5px #80d8ff",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: "#42a5f5",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          height: 150,
          width: 150,
          display: "block",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#bdbdbd",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: "bold",
          hover: {
            backgroundColor: "#757575",
            color: "#212121",
          },
        },
      },
    },
  },
});
light.shadows[1] = light.shadows[0];
light.shadows[4] = light.shadows[0];

export default light;
