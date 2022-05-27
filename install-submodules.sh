git submodule add https://github.com/BrightcoveLearning/s-scripts
cd _includes
git submodule add https://github.com/BrightcoveLearning/s-jekyll-page-includes
git submodule add https://github.com/BrightcoveLearning/s-media
git submodule add https://github.com/BrightcoveLearning/s-support
git submodule add https://github.com/BrightcoveLearning/s-campaign
cd ..
cd assets/images
git submodule add https://github.com/BrightcoveLearning/s-media-img
git submodule add https://github.com/BrightcoveLearning/s-support-img
git submodule add https://github.com/BrightcoveLearning/s-feather-img
git submodule add https://github.com/BrightcoveLearning/s-campaign-img
cd ..
git submodule update --init --recursive