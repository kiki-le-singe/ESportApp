export const getPlayers = async () => {
  try {
    const response = await fetch('https://eurosportdigital.github.io/eurosport-react-native-developer-recruitment/docs/headtohead.json');
    const responseJson = await response.json();
    return responseJson.players;
  }
  catch (error) {
    console.error(error);
  }
}
