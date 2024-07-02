function renameFile(newName, oldName) {
    const MOD = 10**9 + 7;
    const lenOld = oldName.length;
    const lenNew = newName.length;
    
    const dp = Array(lenOld + 1).fill(0).map(() => Array(lenNew + 1).fill(0));
    
    for (let i = 0; i <= lenOld; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= lenOld; i++) {
        for (let j = 1; j <= lenNew; j++) {
            if (oldName[i - 1] === newName[j - 1]) {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[lenOld][lenNew];
}