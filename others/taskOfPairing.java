public static long taskOfPairing(List<Long> freq) {
    long noOfPairs = 0;
    Long remaining = 0L;
    
    for(int i = 0; i < freq.size(); i++) {
        if(freq.get(i) != 0) {
            if(remaining != 0) {
                    
                    noOfPairs += (freq.get(i) + remaining)/2L;
                } else {
                    noOfPairs += freq.get(i)/2L;
            }
                
            if((freq.get(i) + + remaining) % 2 != 0) {
                remaining = (freq.get(i) + remaining) % 2 ;
            } else {
                remaining = 0L;
            }
        
        } else {
            remaining = 0L;
        }
    }
    return noOfPairs;
}