#
# ---------my solution---------
def no_space(x)
    return x.split(' ').join();
end

# --------best practice--------
def no_space(x)
    x.delete(' ')
end