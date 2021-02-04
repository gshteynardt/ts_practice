
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function* getItemReallySlowly<T>(items: Iterable<T>): AsyncIterableIterator<T> {
  for (const item of items) {
    await sleep(1000);
    yield item;
  }
}

export async function speakLikeSloth4(items: string[]) {
  for await (const item of getItemReallySlowly(items)) {
    console.log(item)
  }
}

