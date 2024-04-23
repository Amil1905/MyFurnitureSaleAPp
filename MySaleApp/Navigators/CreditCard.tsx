import React, { useState } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextInput, TouchableOpacity, LayoutAnimation } from "react-native";

const circleSize = 250;
export default function CreditCard({
  name,
  date,
  style,
  textColor = "white",
  bgColor = "#0047cc"
}: {
  name: string;
  date: string;
  cardnumber:number;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  bgColor?: string;
}) {
  const transformText = (input: string): string => {
    return input.toUpperCase();
  };
  const handleInputChange = (text: string): void => {
    setNamer(text);
    const transformed = transformText(text);
    setTransformedText(transformed);
  }
  const [namer, setNamer] = useState('');
  const [transformedText, setTransformedText] = useState('');


  const transformTexts = (input: string): string => {
    return input.toUpperCase();
  };
  const handleInputChanges = (text: string): void => {
    setNamers(text);
    const transformed = transformTexts(text);
    setTransformedTexts(transformed);
  }
  const [namers, setNamers] = useState('');
  const [transformedTexts, setTransformedTexts] = useState('');

  const [cardnum, setCardnum]=useState('');
  const [transformedTextser,setTransformedTextss]=useState('')
  
  const transformTextss = (input: string): string => {
    return input.toUpperCase();
  };

  const handleInputCard=(text:string): void => {
    setCardnum(text);
    const transformed = transformTextss(text)
    setTransformedTextss(transformed)

  }

  const [cardnums, setCardnums]=useState('');
  const [transformedTextsers,setTransformedTextsss]=useState('')
  
  const transformTextsss = (input: string): string => {
    return input.toUpperCase();
  };

  const handleInputCards=(text:string): void => {
    setCardnums(text);
    const transformed = transformTextsss(text)
    setTransformedTextsss(transformed)

  }

  const [checker, setChecker] = useState(true);

  const dotStyle = [s.dot, { backgroundColor: textColor }];


  const changeChecker = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setChecker(!checker);
  }

  return (
    <View>
      {
        checker ? (
          <View>
             <View style={[s.container, { backgroundColor: bgColor }, style]}>
            <View style={[s.bgCircle, s.rightBgCircle]} />
            <View style={[s.bgCircle, s.bottomBgCircle]} />
            <View style={s.logoContainer}>
              <View style={[s.circle, s.leftCircle]} />
              <View style={[s.circle, s.rightCircle]} />
            </View>
            <View style={s.cardNumberContainer}>
              <View style={s.cardNumberPart}>
                <Text  style={[s.text, { color: textColor }]}>
                  {transformedTextser}
                </Text>
   
              </View>

            </View>
            <View style={s.footerContainer}>
              <Text style={[s.text, { color: textColor }]}  >
                {transformedText}

              </Text>
              <Text style={[s.text, { color: textColor }]}>
                {transformedTexts}

              </Text>
            </View>
            
          </View>
          <View style={s.viewname}>
      <View style={s.adismi}>
        <TextInput
          placeholder="Name"
          onChangeText={handleInputChange}
          value={namer}
        />

      </View>
      <View  style={s.adismi}>
      <TextInput
          placeholder="Date"
          onChangeText={handleInputChanges}
          value={namers}
        />

      </View>
      <View style={s.adismi}>
        <TextInput
        placeholder="Card Number"
        onChangeText={handleInputCard}
        value={cardnum}
        maxLength={16}
        />
      </View>

      </View>
            </View>

         
          
          
        ) :
        <View>
                    <View style={[s.containers, { backgroundColor: bgColor }, style]}>
            <View style={s.rectangel}>

            </View>
            <View style={s.rectangels}>
              <Text style={s.secure}>
                {transformedTextsers}
              </Text>
            </View>
            
          </View>
          <View style={s.adismi}>
        <TextInput
        placeholder="Secure"
        onChangeText={handleInputCards}
        value={cardnums}
        maxLength={3}
        />
      </View>

          </View>


      }
      <View>
        <TouchableOpacity onPress={changeChecker}>
          <Text>
            Security code

          </Text>


        </TouchableOpacity>
        <View style={s.purchase}>
        <TouchableOpacity >
          <Text>
            Purchase

          </Text>


        </TouchableOpacity>

        </View>
 

      </View>

      







    </View>


  );
}

const s = StyleSheet.create({
  containers: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: 400,
    position: "relative",
    marginLeft: 5,
    height: 235


  },
  container: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: 400,
    position: "relative",
    marginLeft: 5,
    height:235
  },
  rectangel: {
    width: 390,
    height: 50,
    backgroundColor: 'black',
    marginLeft: -20,

  },
  rectangels: {
    width: 280,
    height: 50,
    backgroundColor: 'white',
    marginLeft: -20,
    margin: 20

  },
  secure: {
    marginLeft: 240,
    fontSize: 18,
    fontWeight: 'bold'


  },
  adismi:{
    width:150,
    height:50,
    borderColor:'grey',
    borderWidth:5,
    margin:25,
    borderRadius:20

  },
  viewname:{
    margin:5,
    alignItems:'center'

  },
  purchase:{
    alignItems:'center'

  },


  logoContainer: { position: "relative", marginBottom: 24 },
  circle: { width: 34, height: 34, borderRadius: 17 },
  rightCircle: { backgroundColor: "#f9a000", position: "absolute", left: 20 },
  leftCircle: { backgroundColor: "#ed0006", zIndex: 999 },
  cardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18
  },
  cardNumberPart: { flexDirection: "row" },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  text: {
    width: 200,

    fontFamily: "Courier",
    fontSize: 17,
    letterSpacing: 2.5
  },
  bgCircle: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.05,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize
  },
  rightBgCircle: {
    top: (-1 * circleSize) / 4,
    right: (-1 * circleSize) / 2
  },
  bottomBgCircle: {
    bottom: (-1 * circleSize) / 2,
    left: (0 * (-1 * circleSize)) / 2
  }
});