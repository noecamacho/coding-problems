arr = [1,1]
i = 2
looking = True
num = 0
res = 0
while looking: 
    
    num = arr[i-2]+arr[i-1]
    if num > 4000000: looking = False
    arr.append(num)
    if num % 2 == 0: res = res + num 
    i = i + 1
print('Even fibonacci numbers sumatory result:' + str(res))
