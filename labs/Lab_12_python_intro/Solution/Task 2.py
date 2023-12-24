def median_sum(n, X):
    median_sum = 0

    for i in range(1, n + 1):
        subsequence = X[:i]

        length = len(subsequence)
        if length % 2 == 1:
            median = subsequence[length // 2]
        else:
            median = (subsequence[length // 2 - 1] + subsequence[length // 2]) / 2

        median_sum += median

    return median_sum

n = int(input("Введите n: "))
X = list(map(int, input("Введите последовательность чисел X: ").split()))

result = median_sum(n, X)
print(result)