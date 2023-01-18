
import { extendTheme } from 'native-base';

const Theme = extendTheme({
  colors:{
    primary: {
      red: "#E52528",
      blue: "#0E396B",
      grey: "#414141",
      white: '#FFFFFF',
      black: "#000000"
    },
    secondary:{
      blue: "#069ABB",
      orange: "#E4901E",
      green: "#0B6E4F",
      pink: "#E66395"
    }
  },
  components: {
    Box: {
      baseStyle:{
        backgroundColor: "primary.blue",
        flex: 1,
      }
    },
    Text:{
      baseStyle:{
        color: "primary.black",
      }
    }
  }
})

  export default Theme