export default interface Player {
  firstname: string,
  lastname: string,
  shortname: string,
  picture: string,
  country: {
    picture: string
  },
  data: {
    weight: number,
    height: number,
    age: number,
    last: number[],
  },
}
