import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  UIManager,
  LayoutAnimation,
  Platform,
} from "react-native";

const NewsScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Enable LayoutAnimation for Android
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/HomePage/F1_logo_white.png")}
          style={{
            height: 25,
            width: 100,
            alignSelf: "center",
            zIndex: 5,
            marginBottom: 19,
          }}
        />
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: "transparent" }}
        contentContainerStyle={{ paddingVertical: 24 }}
      >
        {/* Background Image */}
        <View>
          <Image
            source={require("@/assets/NewsPage/News_Background.png")}
            resizeMode="contain"
            style={styles.background}
          />
        </View>

        {/* Article Container Positioned Absolutely on top of the background */}
        <View
          style={[
            styles.articleContainer,
            { height: isExpanded ? 2170 : 300 }, // Adjust this value for initial and expanded height
          ]}
        >
          <Image
            source={require("@/assets/NewsPage/New_Top_1.png")}
            style={styles.image}
          />
          <Text style={styles.title}>
            Russell disqualified from Belgian Grand Prix for underweight car as
            Hamilton is promoted to winner
          </Text>

          {/* Expand/Collapse Button */}
          <TouchableWithoutFeedback onPress={toggleExpand}>
            <View style={styles.expandButton}>
              <Image
                source={require("@/assets/NewsPage/arrow_cool_down.png")}
                style={styles.arrowImage}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Expandable Content */}
          {isExpanded && (
            <View style={styles.collapsibleContent}>
              <Text style={styles.collapsibleText}>
                George Russell has been disqualified from the result of the
                Belgian Grand Prix after his Mercedes was found to be
                underweight following the race, meaning that team mate Lewis
                Hamilton has been promoted to winner.
              </Text>

              <Text style={styles.collapsibleText}>
                Russell had taken victory in the event following a one-stop
                strategy, which saw him nurse his hard tyres to the chequered
                flag and just hold off Hamilton by half a second.
              </Text>

              <Text style={styles.collapsibleText}>
                However, a Technical Delegate’s Report released after the race
                stated that, while the car had initially been found to be
                compliant with the minimum weight of 798kg, 2.8 litres of fuel
                were then removed.
              </Text>

              <Text style={styles.collapsibleText}>
                The report then reads: “The car was not fully drained according
                to the draining procedure submitted by the team in their
                legality documents as TR Article 6.5.2 is fulfilled.
              </Text>

              <Image
                source={require("@/assets/NewsPage/News_Img_2.png")}
                style={styles.NewsImage}
              />

              <Text style={styles.collapsibleText2}>
                “The car was weighed again on the FIA inside and outside scales
                and the weight was 796.5 kg. The calibration of the outside and
                inside scales was confirmed and witnessed by the competitor.
              </Text>

              <Text style={styles.collapsibleText2}>
                “As this is 1.5 kg below the minimum weight requested in TR
                Article 4.1, which also has to be respected at all times during
                the competition, I am referring this matter to the stewards for
                their consideration.”
              </Text>

              <Text style={styles.collapsibleText2}>
                After being referred to the stewards, it was confirmed that
                Russell had been disqualified from the race. As such, Hamilton
                is promoted to P1, while Oscar Piastri now takes P2 and Charles
                Leclerc moves up to P3.
              </Text>

              <Text style={styles.collapsibleText2}>
                A document released following the stewards' hearing stated:
                "During the hearing the team representative confirmed that the
                measurement is correct and that all required procedures were
                performed correctly. The team also acknowledged that there were
                no mitigating circumstances and that it was a genuine error by
                the team.
              </Text>

              <Text style={styles.collapsibleText2}>
                "The stewards determine that Article 4.1 of the FIA Formula 1
                Technical Regulations has been breached and therefore the
                standard penalty for such an infringement needs to be applied."
              </Text>

              <Image
                source={require("@/assets/NewsPage/News_Img_3.png")}
                style={styles.NewsImage2}
              />

              <Text style={styles.collapsibleText3}>
                Speaking before the stewards’ verdict had been confirmed,
                Mercedes boss Toto Wolff suggested that the team would accept
                the outcome, though acknowledged that it would be especially
                tough for Russell to take.
              </Text>

              <Text style={styles.collapsibleText3}>
                “We have to take it on the chin if the stewards decide against
                ourselves,” said Wolff. “It is what it is, the mistake has
                happened.”
              </Text>

              <Text style={styles.collapsibleText3}>
                The Team Principal went on to add: “We have to learn from that.
                As a team there are more positives to take, obviously for George
                it’s a massive blow.”
              </Text>

              <Image
                source={require("@/assets/NewsPage/News_Img_4.png")}
                style={styles.NewsImage3}
              />
            </View>
          )}
        </View>

        {/* Rest of the content */}
        <View
          style={[
            styles.otherContent,
            { marginTop: isExpanded ? 6 : 20 }, // Adjust content position based on accordion state
          ]}
        >
          <Image
            source={require("@/assets/NewsPage/Section_Cutter.png")}
            style={styles.Section}
          />
          {/* <Text style={styles.sectionHeader}>Latest News</Text> */}
          <Image
            source={require("@/assets/NewsPage/News_Bottom.png")}
            style={styles.BottomNewsImg}
          />

          <Text style={styles.Text1}>2024</Text>
          <Text style={styles.Text2}>5/8</Text>
          <Text style={styles.Text3}>
            ‘I feel let down’ - Norris says Verstappen ‘in the wrong’ as both
            drivers give their take on Austria clash
          </Text>
          <View style={styles.Report}>
            <Text style={styles.Reporttext}>REPORT</Text>
          </View>

          <Text style={styles.Text4}>2024</Text>
          <Text style={styles.Text5}>5/8</Text>
          <Text style={styles.Text6}>
            Sainz happy with ‘bonus’ podium in Austria while Leclerc reflects on
            first-lap clash with Piastri and Perez
          </Text>
          <View style={styles.Report1}>
            <Text style={styles.Reporttext1}>REPORT</Text>
          </View>

          <Text style={styles.Text7}>2024</Text>
          <Text style={styles.Text8}>5/8</Text>
          <Text style={styles.Text9}>
            Hamilton thrilled with podium in Hungary after ‘very tough’ race as
            he reflects on ‘hair-raising’ battle with Verstappen
          </Text>
          <View style={styles.Report2}>
            <Text style={styles.Reporttext2}>REPORT</Text>
          </View>

          <Text style={styles.Text10}>2024</Text>
          <Text style={styles.Text11}>5/8</Text>
          <Text style={styles.Text12}>
            POLL: Were McLaren right to tell Norris to allow Piastri past for
            Hungarian Grand Prix victory?
          </Text>
          <View style={styles.Report3}>
            <Text style={styles.Reporttext3}>REPORT</Text>
          </View>

          <Text style={styles.Text13}>2024</Text>
          <Text style={styles.Text14}>5/8</Text>
          <Text style={styles.Text15}>
            ‘I want things to be done better’ fumes Verstappen after Hungarian
            GP as he admits Red Bull now behind McLaren
          </Text>
          <View style={styles.Report4}>
            <Text style={styles.Reporttext4}>REPORT</Text>
          </View>

          <Text style={styles.Text16}>2024</Text>
          <Text style={styles.Text17}>5/8</Text>
          <Text style={styles.Text18}>
            FACTS AND STATS: Hamilton hits 200 podiums as Piastri becomes first
            winner born this century
          </Text>
          <View style={styles.Report5}>
            <Text style={styles.Reporttext5}>REPORT</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0F0F0F",
    width: "100%",
    height: "100%",
  },
  header: {
    width: "100%",
    height: 116,
    backgroundColor: "#D81159",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 5,
    top: -6,
  },
  articleContainer: {
    backgroundColor: "transparent",
    width: "100%",
    top: 25,
    zIndex: 2,
    paddingBottom: 10,
    marginTop: -3050,
  },
  background: {
    zIndex: -1,
    width: 393,
    top: -26,
    height: 3023,
    alignSelf: "center",
  },
  image: {
    width: "100%",
  },
  title: {
    color: "#FFF",
    fontFamily: "Normal-Font",
    fontSize: 18,
    marginVertical: 10,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 66,
    lineHeight: 26,
    top: -10,
  },
  expandButton: {
    marginTop: 10,
    alignItems: "center",
  },
  arrowImage: {
    width: 70,
    height: 70,
    top: -124,
    left: 148,
  },
  collapsibleContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  collapsibleText: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 24,
    top: -100,
  },
  collapsibleText2: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 24,
    top: -60,
  },
  collapsibleText3: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Normal-Font",
    marginTop: 10,
    lineHeight: 24,
    top: -20,
  },
  Text1: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 24,
    top: -694,
    left: 15,
  },
  Text2: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
    top: -698,
    left: 15,
  },
  Text3: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 10,
    marginTop: 10,
    marginBottom: -300,
    lineHeight: 14,
    padding: 124,
    top: -865,
    left: 105,
  },
  Text4: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 24,
    top: -680,
    left: 15,
  },
  Text5: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
    top: -684,
    left: 15,
  },
  Text6: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 10,
    marginTop: 10,
    marginBottom: -300,
    lineHeight: 14,
    padding: 124,
    top: -835,
    left: 105,
  },
  Text7: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 24,
    top: -666,
    left: 15,
  },
  Text8: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
    top: -670,
    left: 15,
  },
  Text9: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 10,
    marginTop: 10,
    marginBottom: -300,
    lineHeight: 14,
    padding: 124,
    top: -810,
    left: 105,
  },
  Text10: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 24,
    top: -652,
    left: 15,
  },
  Text11: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
    top: -656,
    left: 15,
  },
  Text12: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 10,
    marginTop: 10,
    marginBottom: -300,
    lineHeight: 14,
    padding: 124,
    top: -780,
    left: 105,
  },
  Text13: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 24,
    top: -618,
    left: 15,
  },
  Text14: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
    top: -622,
    left: 15,
  },
  Text15: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 10,
    marginTop: 10,
    marginBottom: -300,
    lineHeight: 14,
    padding: 124,
    top: -740,
    left: 102,
  },
  Text16: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 12,
    marginTop: 10,
    lineHeight: 24,
    top: -604,
    left: 15,
  },
  Text17: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 24,
    top: -606,
    left: 15,
  },
  Text18: {
    color: "#FFFFFF",
    fontFamily: "Normal-Font",
    fontSize: 10,
    marginTop: 10,
    marginBottom: -900,
    lineHeight: 14,
    padding: 124,
    top: -710,
    left: 104,
  },
  otherContent: {
    marginTop: 20,
  },
  sectionHeader: {
    color: "#FFF",
    fontSize: 22,
    marginBottom: 10,
  },
  BottomNewsImg: {
    width: 318,
    height: 716,
    marginTop: 60,
    left: 60,
  },
  Section: {
    position: "absolute",
    top: 20,
  },
  NewsImage: {
    width: 373,
    height: 210,
    left: -16,
    top: -80,
  },
  NewsImage2: {
    width: 373,
    height: 210,
    left: -16,
    top: -30,
  },
  NewsImage3: {
    width: 318,
    height: 27,
    left: 14,
    top: 60,
  },
  Report: {
    height: 24,
    width: 60,
    backgroundColor: "#D81159",
    borderRadius: 60,
    top: -775,
    left: 230,
  },
  Reporttext: {
    alignSelf: "center",
    color: "#FFFFFF",
    top: 8.5,
    fontFamily: "Normal-Font",
    fontSize: 11,
  },
  Report1: {
    height: 24,
    width: 60,
    backgroundColor: "#D81159",
    borderRadius: 60,
    top: -745,
    left: 230,
  },
  Reporttext1: {
    alignSelf: "center",
    color: "#FFFFFF",
    top: 8.5,
    fontFamily: "Normal-Font",
    fontSize: 11,
  },
  Report2: {
    height: 24,
    width: 60,
    backgroundColor: "#D81159",
    borderRadius: 60,
    top: -720,
    left: 230,
  },
  Reporttext2: {
    alignSelf: "center",
    color: "#FFFFFF",
    top: 8.5,
    fontFamily: "Normal-Font",
    fontSize: 11,
  },
  Report3: {
    height: 24,
    width: 60,
    backgroundColor: "#D81159",
    borderRadius: 60,
    top: -680,
    left: 230,
  },
  Reporttext3: {
    alignSelf: "center",
    color: "#FFFFFF",
    top: 8.5,
    fontFamily: "Normal-Font",
    fontSize: 11,
  },
  Report4: {
    height: 24,
    width: 60,
    backgroundColor: "#D81159",
    borderRadius: 60,
    top: -650,
    left: 230,
  },
  Reporttext4: {
    alignSelf: "center",
    color: "#FFFFFF",
    top: 8.5,
    fontFamily: "Normal-Font",
    fontSize: 11,
  },
  Report5: {
    height: 24,
    width: 60,
    backgroundColor: "#D81159",
    borderRadius: 60,
    top: -13,
    // top: -698,
    left: 230,
  },
  Reporttext5: {
    alignSelf: "center",
    color: "#FFFFFF",
    top: 8.5,
    fontFamily: "Normal-Font",
    fontSize: 11,
  },
});

export default NewsScreen;
