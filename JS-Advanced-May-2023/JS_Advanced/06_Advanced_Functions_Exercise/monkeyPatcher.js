function solution(string) {

    if (string === 'upvote') {
        return this.upvotes++;
    }

    if (string === 'downvote') {
        return this.downvotes++;
    }

    let currUpvotes = this.upvotes;
    let currDownvotes = this.downvotes;
    let balance = currUpvotes - currDownvotes;
    let votesSum = currUpvotes + currDownvotes;

    function rating() {
        if (votesSum < 10) {
            return 'new';
        }

        if (currUpvotes > votesSum * 0.66) {
            return 'hot';
        }

        if (balance >= 0 && votesSum > 100) {
            return 'controversial';
        }

        if (balance < 0) {
            return 'unpopular';
        }

        return 'new';
    }

    if (votesSum > 50) {
        let additionalPoints = Math.ceil(Math.max(currUpvotes, currDownvotes) * 0.25);

        return [currUpvotes + additionalPoints, currDownvotes + additionalPoints, balance, rating()];
    }

    return [currUpvotes, currDownvotes, balance, rating()];
}

let post = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');

let score = console.log(solution.call(post, 'score')); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
solution.call(post, 'downvote');
score = console.log(solution.call(post, 'score')); // [139, 189, -50, 'unpopular']