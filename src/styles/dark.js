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
        },
        fontFamily : 'Anek Odia',
    },
    // breakpoints: {
    //   values: {
    //     xs: 0, // Mobile devices
    //     sm: 600, // Tablets and small screens
    //     md: 960, // Desktop
    //     lg: 1280, // Large desktops
    //     xl: 1920, // Extra large desktops
    //   },
    // },
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
                      backgroundColor: '#a33bdf', 
                    },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color:'white',
                fontSize:18,
                '&.Mui-selected': {
                  color: '#a33bdf',

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
                    color:"wheat",
                    padding:0

                }
            }
        },
        MuiCard:{
          styleOverrides: {
            root: {
                border:'solid 1px #a33bdf',
                transition: 'transform 0.2s ease',
                width:'95%',
                backgroundColor:'transparent',
                backdropFilter:'blur(20px)',
                ":hover":{
                  transform: 'scale(1.02)',
                  boxShadow:'2px 6px 10px 5px #5b0d92',
                }
            }
          }
         },
         MuiCardHeader:{
            styleOverrides: {
              root: {
                backgroundColor: '#5b0d92',
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
                color: 'white',
                
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