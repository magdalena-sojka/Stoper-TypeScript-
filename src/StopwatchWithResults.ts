import Stopwatch from './Stopwatch.js'
import type { timeString } from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {

  results: timeString[] = []

  constructor(element: HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = (element.querySelector(".stopwatch__results")) as HTMLDivElement;
    this.dom.addToListBtn = (element.querySelector(".stopwatch__add-to-list-btn")) as HTMLButtonElement;
    this.dom.resetListBtn = (element.querySelector(".stopwatch__reset-list-btn")) as HTMLButtonElement;
  }

  private prepareActions(): void {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
    this.dom.addToListBtn.addEventListener("click", () => this.addToList());
    this.dom.resetListBtn.addEventListener("click", () => this.resetList());
  }

  private renderList() {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */

    this.dom.resultsList.innerHTML = '';
    let html = 'Results...';

    for(const time of this.results) {
      html += '<li>' + time + '</li>';
    }

    this.dom.resultsList.innerHTML = html;
  }

  private addToList() {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
    this.results.push(this.formatTime(this.currentTime));
    this.renderList();
  }

  private resetList(): void {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
    this.results = [];
    this.renderList();
  }

}

export default StopwatchWithResults
