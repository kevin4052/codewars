# https://www.codewars.com/kata/54da5a58ea159efa38000836/ruby

# -------------my solution-------------
def find_it(seq)
    count = Hash.new(0)
    seq.each { |num| count[num] += 1 }
    
    return count.keys.select { |key| count[key] % 2 != 0 }[0]
end

# ------------best practice------------
def find_it(seq)
    seq.detect { |n| seq.count(n).odd? }
end