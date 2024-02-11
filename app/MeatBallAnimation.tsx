import { useWindowDimensions } from "react-native";
import React from "react";
import Touchable, { useGestureHandler } from "react-native-skia-gesture";
import { useValue } from "@shopify/react-native-skia";

const MeatBallAnimation = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const cx = useValue(windowWidth / 2);
  const cy = useValue(windowHeight / 2);

  const RADIUS = 80;

  const gestureHandler = useGestureHandler<{
    x: number;
    y: number;
  }>({
    onStart: (_, context) => {
      context.x = cx.current;
      context.y = cy.current;
    },

    onActive: ({ translationX, translationY }, context) => {
      cx.current = translationX + context.x;
      cy.current = translationY + context.y;
    },
  });

  return (
    <Touchable.Canvas
      style={{
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <Touchable.Circle
        {...gestureHandler}
        cx={cx}
        cy={cy}
        r={RADIUS}
        color="cyan"
      />
    </Touchable.Canvas>
  );
};

export default MeatBallAnimation;
