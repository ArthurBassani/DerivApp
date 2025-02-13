import { View, Text, FlatList, StyleSheet, Animated } from "react-native";
import { router } from "expo-router";
import { useNavigation } from "expo-router";
import { slides } from "@/src/app/onBording/slides";
import React, { useState, useRef } from "react";
import { OnBordingItem } from "./onBordingItem";
import { NextButton } from "./nextButton";
import { Paginator } from "./paginator";

//Arthur
export function OnBording() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const navigation = useNavigation();

  const slidesRef = useRef<FlatList>(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.navigate("/signIn/signIn");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBordingItem item={item}></OnBordingItem>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        ></FlatList>
        <Paginator data={slides} scrollX={scrollX}></Paginator>
        <NextButton scrollTo={scrollTo}></NextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
});
