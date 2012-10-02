# dividers = [x for x in range(2,11)]
# print dividers
# print dividers[-1]
# cont = False
# count = 23
# while not cont:
#     for x in dividers:
#         if count % x:
#             count = count + 1
#             print count
#             break
#         if x == dividers[-1]:
#             print count
#             cont = True

# d = {"one":2 , "two" : 3 , "four" : 5}
# for w in sorted(d, key=d.get, reverse=True):
#   print w, d[w]
lst = ["one", "one", "two", "three", "three", "three"]
wrd_dict = {}
for w in lst:
  if wrd_dict.get(w):
    wrd_dict[w] += 1
  else:
    wrd_dict[w] = 1
for k,v in wrd_dict.items():
  print k, v
