{
    const  countWordOccurrences = (sentence:string, word: string) : number =>{
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const matchesWord = sentence.match(regex);
        return matchesWord ? matchesWord.length : 0;
        

    }

}
