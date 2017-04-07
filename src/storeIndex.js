let StoreIndex;
(function() {
	let instance;
	let objectStore;
	console.log(instance, 'instance')
	StoreIndex = function () {
		if (instance) {
			console.log(298374928374982349872);
			return instance;
		}
		const idb = window.indexedDB;
		if (!idb) {
			console.log('IndexedDB not');
		} else {
			objectStore = idb.open('DB', 3);
			instance = this.onsuccess();
			console.log('obj', instance);
			return instance;
		}
	}

	StoreIndex.prototype.onsuccess = () => {
		objectStore.onsuccess = e => {
			// Store values in the newly created objectStore.3
			console.log('success', e.target.result);
			return objectStore.result;
		}
	}

	StoreIndex.prototype.onerror = (e) => {
		objectStore.onerror = e => {
			console.log('error', e.target);
		};
	}
})();

export default StoreIndex;
