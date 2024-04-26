def staircase(n):
    for i in range(1, n + 1):
        # Calculate the number of spaces needed for right alignment
        spaces = ' ' * (n - i)
        # Calculate the number of hash symbols for this row
        hashes = '#' * i
        # Print the row with right alignment
        print(spaces + hashes)