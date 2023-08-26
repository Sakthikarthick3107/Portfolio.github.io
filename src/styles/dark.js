import { createTheme} from "@mui/material";


const dark = createTheme({
    shadows:['none'],
    palette:{
        primary:{
            main: 'rgb(0,0,0,0.5)'
        },
      // background:{
      //   default : "#212121"
      // }
    },
    typography:{
        allVariants:{
            color:'white'
        }
    },
    breakpoints: {
      values: {
        xs: 0, // Mobile devices
        sm: 600, // Tablets and small screens
        md: 960, // Desktop
        lg: 1280, // Large desktops
        xl: 1920, // Extra large desktops
      },
    },
    components:{
        MuiLink:{
            styleOverrides:{
                root:{
                    textDecoration:'none',
                    color:'white',
                    ":hover":{
                        color:'red'
                    }
                },
                
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    color:'white',
                    '& .MuiTabs-indicator': {
                      backgroundColor: 'red', 
                    },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color:'white',
                '&.Mui-selected': {
                  color: 'red',

                },
              },
            },
          },

          MuiTimelineConnector:{
            styleOverrides:{
              root:{
                minHeight:'100px',

              }
            }
          },
         MuiAvatar:{
          styleOverrides:{
            root:{
              height:50,
              width:50
            }
          }
         },
         MuiListItemText:{
            styleOverrides:{
                primary:{
                    color:'white'
                },
                secondary:{
                    color:'white'
                }
            }
         },
         MuiList:{
            styleOverrides:{
              root:{
                padding:0,
                
                backgroundColor :'transparent'
              }
            }
           },
           MuiIconButton:{
            styleOverrides:{
                root:{
                    color:"wheat"
                }
            }
        },
        MuiCard:{
          styleOverrides: {
            root: {
                border:'solid 1px #b3e5fc',
                transition: 'transform 0.2s ease',
                ":hover":{
                  transform: 'scale(1.02)',
                }
            }
          }
         },
         MuiCardHeader:{
            styleOverrides: {
              root: {
                backgroundColor: '#42a5f5'
              }
            }
         },
         MuiCardMedia:{
          styleOverrides: {
            img: {
              height: 150,
              width: 150,
              display:'block',
              marginLeft:  'auto',
              marginRight:'auto',
              
            },
            
          },
         },
         MuiCardContent:{
            styleOverrides: {
              root:{
                color: 'black'
              }
            }
         },
         MuiCardActions:{
          styleOverrides: {
            root: {
              backgroundColor: '#212121'
            }
          }
         },
         MuiButton:{
          styleOverrides: {
            contained:{
              backgroundColor: '#757575',
              borderRadius:10,
              fontSize:14,
              fontWeight:'bold',
              transition:'ease-in-out 3ms',
              ":hover":{
                backgroundColor:'#455a64'
              }
            }
          }
         }
    }
})
dark.shadows[1] = dark.shadows[0]
dark.shadows[4] = dark.shadows[0]


export default dark