export class GenerateRandom{
  getRandomString(str:string):string{

    let s1: string = (Math.floor(Math.random() * 9)).toString();
    let s2: number = (Math.floor((Math.random() * 25)+65));
    let s3: number = (Math.floor((Math.random() * 25)+97));

    let preString:string = s1 + String.fromCharCode(s2) + String.fromCharCode(s3);

    s1 = (Math.floor(Math.random() * 9)).toString();
    s2 = (Math.floor((Math.random() * 25)+65));
    s3 = (Math.floor((Math.random() * 25)+97));

    let postString:string = String.fromCharCode(s3) + String.fromCharCode(s2) + s1;

    return preString + str + postString;
  }
}
