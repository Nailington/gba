myfile = open("gen\\filenames.txt", "r")
myline = myfile.readline()
gameType = "nes-alt"
while myline:
    print(myline)
    myline = myfile.readline()
    myline1 = myline.replace("\n", "',")
    with open("gen\gen.txt", "a") as f:
        f.write(f"'../gba-host/{gameType}/{myline1}\n")