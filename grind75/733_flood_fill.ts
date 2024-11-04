function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {

  const originalPixelColor = image[sr][sc];
  if(originalPixelColor === color) {
      return image;
  }
  fillPixels(image, sr, sc, color, originalPixelColor);

  return image;

};

const fillPixels = (image: number[][], sr: number, sc: number, newColor: number, originalPixelColor: number ): void => {
  if ( sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] != originalPixelColor) {
      return;
  }

  image[sr][sc] = newColor;
  fillPixels(image, sr + 1, sc, newColor, originalPixelColor);
  fillPixels(image, sr - 1, sc, newColor, originalPixelColor);
  fillPixels(image, sr, sc + 1, newColor, originalPixelColor);
  fillPixels(image, sr, sc - 1, newColor, originalPixelColor);
}